<template>
    <div id="wiki">
        <div>
            <sidebar-menu
                :menu="menu"
                theme="white-theme"
                :show-one-child="true"
            />
        </div>
    </div>
</template>
<script>

import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
//import "vue-sidebar-menu/src/scss/_variables.scss";
//import "vue-sidebar-menu/src/scss/themes/white-theme.scss";
/* 
content: '\F105';
    font-family: 'Font Awesome 5 Free';

*/

import { SidebarMenu } from 'vue-sidebar-menu'
export default {
    name: 'MainPageWiki',
    components : {
    SidebarMenu
  },
  data: function(){
      return {
           menu: [
                    {
                        header: true,
                        title: 'Wiki of Exercises',
                        hiddenOnCollapse: true
                    },
                    {
                        title: '"Another "',
                        //component : 'select',
                        icon : 'fa fa-bell'
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
#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}
.demo {
  padding: 50px;
}
.container {
  max-width: 600px;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  font-size: 13px;
  padding: 5px;
  overflow: auto;
}
</style>