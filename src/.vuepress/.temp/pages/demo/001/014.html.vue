<template><div><p>The theme provides the following ways to enrich your content.</p>
<ul>
<li>Footnotes: Supplementary explanation of key content</li>
<li>Import files: Easily split or reuse files</li>
<li>Presentation: Show content</li>
</ul>
<!-- more -->
<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>
<h3 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>component</span></a></h3>
<h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h3>
<p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>.</p>
<ul>
<li><RouteLink to="/demo/001/footnote.html">View Detail</RouteLink></li>
</ul>
<h3 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files"><span>Include files</span></a></h3>
<p>File not found</p>
<ul>
<li><RouteLink to="/demo/001/include.html">View Detail</RouteLink></li>
</ul>
<h3 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation"><span>Presentation</span></a></h3>
<RevealJs id="revealjs-56" code="eJxVjb0KwjAUhff7FBfaoQXTH92UDo66OlppQxtMtGlCc0VBfHcTKJRuh4/vnANRhJdB9QJLgCNaPvH7xK3EtyKJzmiBJD6EfOyR43VQ4/OWSCLr9nmulSMxMWmsyDqjUwDGGCyTWw/wREL78TkEtHJ2mT9u2/bhoDOj809YYXkIKKgr05fjGM5JTVIQb4rNHMrUd2r30s1XVcUvSH9FOzuV" theme="auto"></RevealJs><ul>
<li><RouteLink to="/demo/001/revealjs.html">View Detail</RouteLink></li>
</ul>
<h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>Tabs</span></a></h3>
<Tabs id="67" :data='[{"id":"apple"},{"id":"banana"},{"id":"orange"}]' tab-id="fruit">
<template #title0="{ value, isActive }">apple</template>
<template #title1="{ value, isActive }">banana</template>
<template #title2="{ value, isActive }">orange</template>
<template #tab0="{ value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<ul>
<li><RouteLink to="/demo/001/tabs.html">View Detail</RouteLink></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


