<template><div><p>By using <a href="https://ecosystem.vuejs.press/zh/plugins/features/photo-swipe.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-photo-swipe</a>, clicking images in pages will enter preview mode.</p>
<p>If you don't need this feature, you can set <code v-pre>plugins.photoSwipe: false</code> in theme options to disable it.</p>
<!-- more -->
<h2 id="browse-mode" tabindex="-1"><a class="header-anchor" href="#browse-mode"><span>Browse Mode</span></a></h2>
<p>In preview mode, you can:</p>
<ul>
<li>Swipe left and right to preview other pictures on the page in order</li>
<li>View the description of the picture</li>
<li>Zoom in and zoom out the picture</li>
<li>View pictures in full screen</li>
<li>Download pictures</li>
<li>Share pictures</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>Besides clicking &quot;×&quot; in the upper right corner to exit the preview mode, scrolling up and down more than a certain distance will also exit preview mode</li>
<li>On mobile devices, or using the PC trackpad, you can use pan and zoom gestures to pan and zoom in the preview mode</li>
</ul>
</div>
<h2 id="customize-config" tabindex="-1"><a class="header-anchor" href="#customize-config"><span>Customize Config</span></a></h2>
<p><code v-pre>vuepress-theme-hope</code> passes <code v-pre>plugins.photoSwipe</code> in theme options as plugin options to <code v-pre>@vuepress/plugin-photo-swipe</code>.</p>
<p>You can check the <a href="https://ecosystem.vuejs.press/zh/plugins/features/photo-swipe.html" target="_blank" rel="noopener noreferrer">photo-swipe plugin documentation</a> for advanced configuration.</p>
<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>
<!-- markdownlint-disable -->
<div class="image-preview">
  <img src="//theme-hope-assets.vuejs.press/files/img/1.jpg" />
  <img src="//theme-hope-assets.vuejs.press/files/img/2.jpg" />
  <img src="//theme-hope-assets.vuejs.press/files/img/3.jpg" />
</div>
<!-- markdownlint-restore -->
</div></template>



<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>