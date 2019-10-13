<template>
  <div style="padding: 5px;">
    <b-card
      style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:500px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin-left: auto;
    margin-right: auto;max-width:1000px"
    >
      <editor
        autofocus
        holder-id="codex-editor"
        save-button-id="save-button"
        :init-data="initData"
        :customTools="customTools"
        @save="save"
      />
    </b-card>
  </div>
</template>
<script>
import { BCard } from "bootstrap-vue";
import { Editor } from "vue-editor-js";
import Embed from '@editorjs/embed'
export default {
  name: "RichTextEditorComment",
  data: function() {
    return {
      initData: {},
      customTools: {
        embed: new Embed({
            services: {
              youtube: true,
              coub: true,
              instagram: {
                regex: /(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/,
                embedUrl: "//platform.instagram.com/en_US/embeds.js",
                html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                height: 300,
                width: 600,
                id:11
              }
            }
          })
        }
      }
    },
  components: {
    BCard,
    Editor
  },
  methods:{
    save:function(data){
      alert(data)
    }
  },
  props: {
    threadId: {
      type: Number,
      default: 0
    },
    postEnabled: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style>
.menubar__button {
  background-color: transparent;
  margin: 6px;
  border: none;
  height: 18px;
  width: 18px;
  background-repeat: no-repeat;
}
.menubar_text {
  background-color: transparent;
  margin: 5px;
  border: none;
}
</style>