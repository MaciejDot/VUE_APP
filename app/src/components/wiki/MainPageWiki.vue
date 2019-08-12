<template>
    <div id="wiki" style="display: -webkit-box;">
                <sidebar-menu
                :menu="menu"
                :collapsed="collapsed"
                theme="white-theme"
                :show-one-child="true"
                style="position:sticky;top:0;overflow: hidden;"
                @toggle-collapse="onToggleCollapse"
                />
                <div :style="{width: collapsed ? 'calc(100% - 50px)' : 'calc(100% - 350px)'}">
                <MainPageArticles 
                style="width:-webkit-fill-available"
                 />
                </div>
            <!--theme="white-theme" style="display: inline-block;
            style="/*display: inline-block;*//*margin-left: -50%;*//*width:60%;*//*width: calc(100% - 350px);*/"
    margin-left: -50%;"position:absolute;  style="top : auto;""-->
    </div>  
</template>
<script>
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
import { SidebarMenu } from 'vue-sidebar-menu'
import MainPageArticles from '@/components/articles/MainPageArticles'
export default {
    name: 'MainPageWiki',
    components : {
    SidebarMenu,
    MainPageArticles
  },
  data: function(){
      return {
        collapsed:false,
           menu: [
                    {
                        header: true,
                        title: 'Wiki of Exercises',
                        hiddenOnCollapse: true
                    },
                    {
                        title: 'search',
                        icon : 'fa fa-search',
                        badge: {
                            text: 'new',
                            class: 'vsm--badge_default'
                        }
                    },
                    {
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
      }
  },
  methods: {
    onToggleCollapse (collapsed) {
      this.collapsed = collapsed
    }
  }
    
  }
</script>
<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  background-color: #f2f4f7;
  color: #262626;
}
</style>