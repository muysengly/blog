<template><div><h2 id="🛠install" tabindex="-1"><a class="header-anchor" href="#🛠install"><span>🛠Install</span></a></h2>
<p>Create a new vuepress-theme-hope project in <code v-pre>[dir]</code> directory under the current path:</p>
<CodeTabs id="6" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [dir]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [dir]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope@latest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [dir]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>To add vuepress-theme-hope as docs builder to an existing project, run the following command in the project root directory:</p>
<CodeTabs id="20" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [dir]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [dir]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-hope@latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [dir]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="🚀usage" tabindex="-1"><a class="header-anchor" href="#🚀usage"><span>🚀Usage</span></a></h2>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "vuepress"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "vuepress-theme-hope"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // your theme config here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="telegram-group" tabindex="-1"><a class="header-anchor" href="#telegram-group"><span>Telegram Group</span></a></h2>
<ul>
<li><a href="https://t.me/vuepressthemehope" target="_blank" rel="noopener noreferrer">vuepressthemehope</a></li>
</ul>
</div></template>


