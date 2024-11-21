<template><div><h2 id="hes-he" tabindex="-1"><a class="header-anchor" href="#hes-he"><span>Hes He</span></a></h2>
<!-- more -->
<p>This content in another file.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This is a tip</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>This is a warning</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>This is a dangerous warning</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>This is an information.</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>This is an important message</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>This is a note</p>
</div>
<details class="hint-container details"><summary>Details</summary>
<p>This is a details block</p>
</details>
<CodeTabs id="42" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]'>
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'VuePress'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`Hello, </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">!`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'VuePress'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`Hello, </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">!`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container caution">
<p class="hint-container-title">STOP</p>
<p>Danger zone, do not proceed</p>
</div>
<details class="hint-container details"><summary>Click me to view the code</summary>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Hello, VuePress!'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></details>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">defaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '@vuepress/theme-default'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'Hello, VuePress'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> defaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    logo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://vuejs.org/images/logo.png'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// line-numbers is enabled</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> line2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'This is line 2'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> line3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'This is line 3'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// line-numbers is disabled</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> line2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'This is line 2'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> line3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'This is line 3'</span></span></code></pre>
</div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// line-numbers is enabled and start from 2</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> line3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'This is line 3'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> line4</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'This is line 4'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 1"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install VuePress:</p>
<CodeTabs id="65" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2" tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Install VuePress Tabs Plugin:</p>
<CodeTabs id="79" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2" tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @vuepress/plugin-markdown-tab</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @vuepress/plugin-markdown-tab</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @vuepress/plugin-markdown-tab</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<ArtPlayer src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4" /><BiliBili bvid="BV1kt411o7C3" /><PDF url="//theme-hope-assets.vuejs.press/files/sample.pdf" /><VidStack
  src="youtube/_cMxraX_5RE"
  title="VidStack YouTube Demo"
/>
<VidStack
  src="//theme-hope-assets.vuejs.press/files/sample.mp3"
  title="VidStack Audio Demo"
/>
<VidStack
  title="Agent 327 Operation Barber Shop"
  poster="https://files.vidstack.io/agent-327/poster.png"
  :src="[
    {
      src: 'https://files.vidstack.io/agent-327/720p.mp4',
      type: 'video/mp4',
    },
    {
      src:  'https://files.vidstack.io/agent-327/720p.avi',
      type: 'video/avi',
    },
    {
      src:  'https://files.vidstack.io/agent-327/720p.ogv',
      type: 'video/ogg',
    },
  ]"
  :tracks="[
    {
      src: 'https://files.vidstack.io/agent-327/subs/english.vtt',
      label: 'English',
      language: 'en-US',
      kind: 'subtitles',
      default: true,
    },
    {
      src: 'https://files.vidstack.io/agent-327/subs/spanish.vtt',
      label: 'Spanish',
      language: 'es-ES',
      kind: 'subtitles',
    },
    {
      src: 'https://files.vidstack.io/agent-327/subs/french.vtt',
      label: 'French',
      language: 'fr-FR',
      kind: 'subtitles',
    },
    {
      src: 'https://files.vidstack.io/agent-327/subs/german.vtt',
      label: 'German',
      language: 'ge-GE',
      kind: 'subtitles',
    },
    {
      src: 'https://files.vidstack.io/agent-327/subs/italian.vtt',
      label: 'Italian',
      language: 'it-IT',
      kind: 'subtitles',
    },
    {
      src: 'https://files.vidstack.io/agent-327/subs/russian.vtt',
      label: 'Russian',
      language: 'ru-RU',
      kind: 'subtitles',
    },
    // Chapters
    {
      src: 'https://files.vidstack.io/agent-327/chapters.vtt',
      kind: 'chapters',
      language: 'en-US',
      default: true,
    },
  ]"
  thumbnails="https://files.vidstack.io/agent-327/thumbnails.vtt"
/>
<Share colorful /><!-- <Share services="qq,weibo" />
<Share :services="['qq','weibo']" />
<Share /> -->
<ul>
<li>
<p>Home icon: <FontIcon icon="home" /></p>
</li>
<li>
<p>A big and green share icon: <FontIcon icon="share" color="#3eaf7c" size="32" /></p>
</li>
<li>
<Badge text="tip" type="tip" vertical="middle" /></li>
<li>
<Badge text="warning" type="warning" vertical="middle" /></li>
<li>
<Badge text="danger" type="danger" vertical="middle" /></li>
<li>
<Badge text="important" type="important" vertical="middle" /></li>
<li>
<Badge text="info" type="info" vertical="middle" /></li>
<li>
<Badge text="note" type="note" vertical="middle" /></li>
</ul>
<VidStack
  src="https://files.vidstack.io/sprite-fight/720p.mp4"
  poster="https://files.vidstack.io/sprite-fight/poster.webp"
/>
<p>Let <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mspace></mspace><mspace width="0.1111em"/><mo lspace="0em" rspace="0.17em"></mo><mtext> ⁣</mtext><mo lspace="0em" rspace="0em">:</mo><mspace width="0.3333em"/><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">]</mo><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">f\colon[a,b]\to\R</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace nobreak"></span><span class="mspace" style="margin-right:0.1111em;"></span><span class="mpunct"></span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mrel">:</span></span><span class="mspace" style="margin-right:0.3333em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> be Riemann integrable. Let <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mspace></mspace><mspace width="0.1111em"/><mo lspace="0em" rspace="0.17em"></mo><mtext> ⁣</mtext><mo lspace="0em" rspace="0em">:</mo><mspace width="0.3333em"/><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">]</mo><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">F\colon[a,b]\to\R</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace nobreak"></span><span class="mspace" style="margin-right:0.1111em;"></span><span class="mpunct"></span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mrel">:</span></span><span class="mspace" style="margin-right:0.3333em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> be
<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mtext> </mtext><mi>d</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">F(x)=\int_{a}^{x} f(t)\,dt</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2151em;vertical-align:-0.3558em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8593em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3558em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span></span></span></span>. Then <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi></mrow><annotation encoding="application/x-tex">F</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span></span></span></span> is continuous, and at all <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> such that
<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> is continuous at <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>, <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi></mrow><annotation encoding="application/x-tex">F</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span></span></span></span> is differentiable at <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> with <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>F</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">F&#x27;(x)=f(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0019em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>.</p>
<h1 id="welcom-to-my-blog-🙏" tabindex="-1"><a class="header-anchor" href="#welcom-to-my-blog-🙏"><span>Welcom to my blog. 🙏</span></a></h1>
<p>May contain some <a href="./file.mdx">links</a> or <strong>emphasis</strong>.</p>
<h2>Center an Image</h2>
<p>To center an image, set left and right margin to auto, and make it into a block element.</p>
<Mermaid id="mermaid-149" code="eJxLy8kvT85ILCpRCHHhUgACx2gl54yizOKS3MRipVgFXV07BScNJfd8heKM/IKCzLx0JU2wOiewlHO1kk9qiUJuqkJJRmZetlKtgppCnmG0UmheSWZJTmqKgl9+SqpSLFiHM1hHnhFeWWNMWQAfNS64"></Mermaid><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>Some <strong>content</strong> with <em>Markdown</em> <code v-pre>syntax</code>. Check <a href="#">this <code v-pre>api</code></a>.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Some <strong>content</strong> with <em>Markdown</em> <code v-pre>syntax</code>. Check <a href="#">this <code v-pre>api</code></a>.</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Some <strong>content</strong> with <em>Markdown</em> <code v-pre>syntax</code>. Check <a href="#">this <code v-pre>api</code></a>.</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Some <strong>content</strong> with <em>Markdown</em> <code v-pre>syntax</code>. Check <a href="#">this <code v-pre>api</code></a>.</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>Some <strong>content</strong> with <em>Markdown</em> <code v-pre>syntax</code>. Check <a href="#">this <code v-pre>api</code></a>.</p>
</div>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mi>a</mi><msubsup><mi>x</mi><mi>n</mi><mn>2</mn></msubsup></mrow><annotation encoding="application/x-tex">
\sum_{i=1}^Nax_n^2
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3.106em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> aaa</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> bbb</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> ccc</label></li>
</ul>
<h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2"><span>Heading 2</span></a></h2>
<h3 id="heading-3" tabindex="-1"><a class="header-anchor" href="#heading-3"><span>Heading 3</span></a></h3>
<h4 id="heading-4" tabindex="-1"><a class="header-anchor" href="#heading-4"><span>Heading 4</span></a></h4>
<h5 id="heading-5" tabindex="-1"><a class="header-anchor" href="#heading-5"><span>Heading 5</span></a></h5>
<h6 id="heading-6" tabindex="-1"><a class="header-anchor" href="#heading-6"><span>Heading 6</span></a></h6>
<p>Thanks for visiting <a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer">The Markdown Guide</a>!</p>
<p>This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">basic syntax</a> and <a href="https://www.markdownguide.org/extended-syntax/" target="_blank" rel="noopener noreferrer">extended syntax</a>.</p>
<h2 id="basic-syntax" tabindex="-1"><a class="header-anchor" href="#basic-syntax"><span>Basic Syntax</span></a></h2>
<p>These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.</p>
<h3 id="heading" tabindex="-1"><a class="header-anchor" href="#heading"><span>Heading</span></a></h3>
<h1 id="h1" tabindex="-1"><a class="header-anchor" href="#h1"><span>H1</span></a></h1>
<h2 id="h2" tabindex="-1"><a class="header-anchor" href="#h2"><span>H2</span></a></h2>
<h3 id="h3" tabindex="-1"><a class="header-anchor" href="#h3"><span>H3</span></a></h3>
<h3 id="bold" tabindex="-1"><a class="header-anchor" href="#bold"><span>Bold</span></a></h3>
<p><strong>bold text</strong></p>
<h3 id="italic" tabindex="-1"><a class="header-anchor" href="#italic"><span>Italic</span></a></h3>
<p><em>italicized text</em></p>
<h3 id="blockquote" tabindex="-1"><a class="header-anchor" href="#blockquote"><span>Blockquote</span></a></h3>
<blockquote>
<p>blockquote</p>
</blockquote>
<h3 id="ordered-list" tabindex="-1"><a class="header-anchor" href="#ordered-list"><span>Ordered List</span></a></h3>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<h3 id="unordered-list" tabindex="-1"><a class="header-anchor" href="#unordered-list"><span>Unordered List</span></a></h3>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>
<p><code v-pre>code</code></p>
<h3 id="horizontal-rule" tabindex="-1"><a class="header-anchor" href="#horizontal-rule"><span>Horizontal Rule</span></a></h3>
<hr>
<h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>Link</span></a></h3>
<p><a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer">Markdown Guide</a></p>
<h3 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>Image</span></a></h3>
<figure><img src="https://www.markdownguide.org/assets/images/tux.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<h2 id="extended-syntax" tabindex="-1"><a class="header-anchor" href="#extended-syntax"><span>Extended Syntax</span></a></h2>
<p>These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.</p>
<h3 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>Table</span></a></h3>
<table>
<thead>
<tr>
<th>Syntax</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Header</td>
<td>Title</td>
</tr>
<tr>
<td>Paragraph</td>
<td>Text</td>
</tr>
</tbody>
</table>
<h3 id="fenced-code-block" tabindex="-1"><a class="header-anchor" href="#fenced-code-block"><span>Fenced Code Block</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "firstName"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"John"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "lastName"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Smith"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "age"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h3>
<p>Here's a sentence with a footnote. <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<h3 id="heading-id" tabindex="-1"><a class="header-anchor" href="#heading-id"><span>Heading ID</span></a></h3>
<h3 id="custom-id" tabindex="-1"><a class="header-anchor" href="#custom-id"><span>My Great Heading</span></a></h3>
<h3 id="definition-list" tabindex="-1"><a class="header-anchor" href="#definition-list"><span>Definition List</span></a></h3>
<p>term
: definition</p>
<h3 id="strikethrough" tabindex="-1"><a class="header-anchor" href="#strikethrough"><span>Strikethrough</span></a></h3>
<p><s>The world is flat.</s></p>
<h3 id="task-list" tabindex="-1"><a class="header-anchor" href="#task-list"><span>Task List</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> Write the press release</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> Update the website</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> Contact the media</label></li>
</ul>
<h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>Emoji</span></a></h3>
<p>That is so funny! 😂</p>
<p>(See also <a href="https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji" target="_blank" rel="noopener noreferrer">Copying and Pasting Emoji</a>)</p>
<h3 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight"><span>Highlight</span></a></h3>
<p>I need to highlight these <mark>very important words</mark>.</p>
<h3 id="subscript" tabindex="-1"><a class="header-anchor" href="#subscript"><span>Subscript</span></a></h3>
<p>H<sub>2</sub>O</p>
<h3 id="superscript" tabindex="-1"><a class="header-anchor" href="#superscript"><span>Superscript</span></a></h3>
<p>X<sup>2</sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>This is the footnote. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


