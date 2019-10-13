<template>
  <div style="padding: 5px;">
    <div
      style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:600px;max-width:1000px;margin-left: auto; margin-right: auto;"
    >
      <div style="padding: 5px;">
        <div>
          <strong>Title</strong>
        </div>
        <div
          style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:50px;"
        >
          <input
            type="text"
            maxlength="200"
            style="background-color:white; min-height:40px; width:100%;border-radius:10px; text-align:left;font-size: 1.2rem;font-weight: 400;line-height: 2;font-weight: bold;"
          />
        </div>
      </div>
      <div>
        <strong>Description</strong>
      </div>
      <RichTextEditor/>
    </div>
  </div>
</template>
<script>
import RichTextEditor from "@/components/richtexteditor/RichTextEditor";
export default {
  name: "ForumThreadCreator",
  data: function() {
    return {
      threadId: 0
    };
  },
  components: {
    RichTextEditor
  }
};
</script>