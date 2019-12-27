<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm10 md8>
            <v-card>
              <div ref="inputForm">
                <v-expand-transition>
                  <v-img
                    ref="image"
                    v-show="showImg"
                    v-bind:src="searchImgURL"
                  ></v-img>
                </v-expand-transition>
                <v-card-text>
                  <v-form>
                    <v-file-input
                      @change="fileChange"
                      v-model="searchImg"
                    ></v-file-input>
                    <v-btn v-bind:disabled="!searchImgURL" @click="searchImage"
                      >Search</v-btn
                    >
                  </v-form>
                </v-card-text>
              </div>
            </v-card>
            <template v-for="(result, index) in searchResults">
              <v-slide-y-transition v-bind:key="index">
                <v-card class="mt-5">
                  <v-toolbar dark>
                    <v-toolbar-title>{{
                      result.title_native + ": " + result.title_english
                    }}</v-toolbar-title>
                  </v-toolbar>
                  <v-card-title>
                    {{
                      isNaN(result.episode)
                        ? result.episode
                        : "EP#" + (result.episode || "0")
                    }}
                    <v-spacer></v-spacer>
                    {{ "~" + Math.floor(result.at / 60) + "min" }}
                  </v-card-title>
                  <v-card-text>
                    <p>
                      {{ Math.floor(result.similarity * 100) + "% Similarity" }}
                    </p>
                    <v-img
                      v-bind:src="
                        'https://trace.moe/thumbnail.php?anilist_id=' +
                          result.anilist_id +
                          '&file=' +
                          encodeURIComponent(result.filename) +
                          '&t=' +
                          result.at +
                          '&token=' +
                          result.tokenthumb
                      "
                    ></v-img>
                  </v-card-text>
                  <v-divider></v-divider>

                  <v-expand-transition>
                    <v-card-text v-if="result.show">
                      <a
                        v-bind:href="
                          'https://anilist.co/anime/' + result.anilist_id
                        "
                      >
                        {{
                          result.anilist_data.title.native +
                            ": " +
                            result.anilist_data.title.english
                        }}
                      </a>
                      <p>
                        {{
                          result.anilist_data.startDate.year +
                            "-" +
                            result.anilist_data.startDate.year +
                            " " +
                            result.anilist_data.status
                        }}
                      </p>
                      <p>
                        {{
                          result.anilist_data.season +
                            " " +
                            result.anilist_data.seasonYear
                        }}
                      </p>
                      <p>{{ result.anilist_data.episodes + " episodes" }}</p>

                      <blockquote>
                        {{ result.anilist_data.description }}
                      </blockquote>
                    </v-card-text>
                  </v-expand-transition>
                  <v-divider></v-divider>
                  <v-card-actions class="justify-center">
                    <v-btn icon @click="result.show = !result.show">
                      <v-icon>{{
                        result.show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-slide-y-transition>
            </template>
            <div v-show="searching" class="text-center mt-5">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      searchImg: null,
      searchImgURL: "",
      showImg: false,
      searchResults: [],
      searching: false
    };
  },
  methods: {
    fileChange() {
      this.searchResults = [];
      let reader = new FileReader();
      var outerScope = this;
      outerScope.showImg = false;
      outerScope.searchImgURL = "";
      reader.addEventListener(
        "load",
        function() {
          outerScope.searchImgURL = reader.result;
          setTimeout(function() {
            outerScope.showImg = true;
          }, 500);
        },
        false
      );
      if (this.searchImg && this.searchImg.name) {
        // console.log(this.searchImg)
        reader.readAsDataURL(this.searchImg);
      }
    },
    onDrop(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        // let textURL = e.dataTransfer.getData("text");
        // if (textURL != "") {
        //   let outerScope = this;
        //   this.showImg = false;
        //   this.searchImg = null;
        //   this.searchImgURL = textURL;
        //
        //   setTimeout(function() {
        //     outerScope.showImg = true;
        //   }, 100);
        // } cors does not let this work, but there is a different api request that takes a link

        return;
      }
      this.searchImg = files[0];
      this.fileChange();
    },
    searchImage() {
      // console.log(image.image);
      // let img = image.image;
      this.searching = true;
      let img = document.createElement("img");
      img.crossOrigin = "Anonymous";
      img.src = this.searchImgURL;

      let outerScope = this;
      // console.log(img);

      var canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      fetch("https://trace.moe/api/search", {
        method: "POST",
        body: JSON.stringify({ image: canvas.toDataURL("image/jpeg", 0.8) }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(result => {
          result.docs.forEach(r => {
            let query = `
            query ($id: Int) {
              Media (id: $id, type: ANIME) {
                id
                siteUrl
                title {
                  english
                  native
                }
                description
                season
                seasonYear
                startDate {
                  year
                  month
                  day
                }
                endDate {
                  year
                  month
                  day
                }
                status
                episodes
                duration
              }
            }
            `;

            let variables = {
              id: r.anilist_id
            };

            let url = "https://graphql.anilist.co",
              options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify({
                  query: query,
                  variables: variables
                })
              };

            fetch(url, options)
              .then(aniResp => aniResp.json())
              .then(data => {
                r.anilist_data = data.data.Media;
                r.show = false;
                outerScope.searchResults.push(r);
                // console.log(r);
                outerScope.searching = false;
              });
            // .catch(error => {
            //   console.log(error);
            // })
          });
        });
    }
  },
  mounted() {
    const { inputForm } = this.$refs;
    let dragEvents = [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop"
    ];
    dragEvents.forEach(event => {
      document.body.addEventListener(event, e => {
        e.preventDefault();
        e.stopPropagation();
      });
    });
    inputForm.addEventListener("drop", e => {
      this.onDrop(e);
    });
  }
};
</script>
