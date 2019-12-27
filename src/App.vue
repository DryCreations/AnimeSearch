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
                </v-card>
              </v-slide-y-transition>
            </template>
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
      searchResults: []
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
          outerScope.searchResults = result.docs;
          // console.log(result);
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
