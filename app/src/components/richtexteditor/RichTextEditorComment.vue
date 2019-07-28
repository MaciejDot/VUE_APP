<template>
<div>
<div style="padding: 5px;">
  <div style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:500px;">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
          title="bold"
          style="background-image:url(images/icons/bold.svg)"
        >
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
          title="italic"
          style="background-image:url(images/icons/italic.svg)"
        >
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
          title="strike"
          style="background-image:url(images/icons/strike.svg)"
        >
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
          title="underline"
          style="background-image:url(images/icons/underline.svg)"
        >
        </button>

        <button
          class="menubar_text"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          title="H1"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar_text"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          title="H2"
          @click="commands.heading({ level: 2 })"
          style=""
        >
          H2
        </button>

        <button
          class="menubar_text"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          title="H3"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
          title="bullet list"
          style="background-image:url(images/icons/ul.svg)"
        >
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
          title="ordered list"
          style="background-image:url(images/icons/ol.svg)"
        >
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
          title="block quote"
          style="background-image:url(images/icons/quote.svg)"
        >
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
          title="undo"
          style="background-image:url(images/icons/undo.svg)"
        >
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
          title="redo"
          style="background-image:url('images/icons/redo.svg');"
        >
        </button>

      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" style="background-color:white; min-height:400px;border-radius:10px; text-align:left;" />
  </div>
</div>
</div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
export default {
  name: 'RichTextEditorComment',
  components: {
    EditorContent,
    EditorMenuBar,
    
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: ``,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style>
.menubar__button {
background-color: transparent; 
margin: 6px;
border: none; height: 18px; width: 18px;background-repeat: no-repeat;
}
.menubar_text{
background-color: transparent; 
margin: 5px;
border: none; 
}
</style>