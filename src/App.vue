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
      showImg: false
    };
  },
  methods: {
    fileChange() {
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
          }, 100);
        },
        false
      );
      if (this.searchImg) {
        reader.readAsDataURL(this.searchImg);
      }
    },
    onDrop(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        let textURL = e.dataTransfer.getData("text");
        if (textURL != "") {
          let outerScope = this;
          this.showImg = false;
          this.searchImg = null;
          this.searchImgURL = textURL;

          setTimeout(function() {
            outerScope.showImg = true;
          }, 100);
        }

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
          console.log(result);
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
