<template><div><p><code v-pre>vuepress-theme-hope</code> can display article information for you.</p>
<!-- more -->
<h2 id="enable" tabindex="-1"><a class="header-anchor" href="#enable"><span>Enable</span></a></h2>
<p>Page information display is enabled globally by default, while supports page config. You can disable it by setting <code v-pre>pageInfo: false</code> in frontmatter of a specific page.</p>
<p>To keep it globally disabled, please set <code v-pre>pageInfo</code> to <code v-pre>false</code> in the plugin options. Then you can set <code v-pre>pageInfo</code> in frontmatter of a specific page to enable it locally.</p>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters <Badge text="Support page config" /></span></a></h2>
<p><code v-pre>pageInfo</code> accepts an array of strings by default, filling in a group of items. The order of filling is the order in which the items are displayed.</p>
<p>The optional values and corresponding contents of the entry are as follows:</p>
<table>
<thead>
<tr>
<th>Entry</th>
<th>Corresponding content</th>
<th>page frontmatter value</th>
<th>Theme Options</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&quot;Author&quot;</code></td>
<td>author</td>
<td><code v-pre>author</code></td>
<td><code v-pre>author</code></td>
</tr>
<tr>
<td><code v-pre>&quot;Date&quot;</code></td>
<td>Writing Date</td>
<td><code v-pre>time</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Original&quot;</code></td>
<td>Whether is original</td>
<td><code v-pre>isOriginal</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Category&quot;</code></td>
<td>Category</td>
<td><code v-pre>category</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Tag&quot;</code></td>
<td>Tag</td>
<td><code v-pre>tag</code></td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;ReadingTime&quot;</code></td>
<td>Estimated reading time</td>
<td>N/A (automatically generated)</td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;Word&quot;</code></td>
<td>Word count</td>
<td>N/A (automatically generated)</td>
<td>N/A</td>
</tr>
<tr>
<td><code v-pre>&quot;PageView&quot;</code></td>
<td>Pageviews</td>
<td><code v-pre>pageview</code> (only available in Waline)</td>
<td><code v-pre>plugins.comment.pageview</code></td>
</tr>
</tbody>
</table>
<p>By default, it will display &quot;Author, Visit Number, Writing Date, Category, Tags, Expect Reading Time&quot;.</p>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author <Badge text="Support page config" /></span></a></h3>
<p>You can set <code v-pre>author</code> in theme options to set the default author info globally, or set <code v-pre>author</code> in page frontmatter for a page.</p>
<p>An author info can be a string representing author names, or an object with the following fields:</p>
<ul>
<li><code v-pre>name</code>: author name, required</li>
<li><code v-pre>url</code>: author website, optional</li>
<li><code v-pre>email</code>: author email, optional</li>
</ul>
<p>If there should be multiple authors, you can also set an array of them.</p>
<p>When a default author info is set in theme options, you can set <code v-pre>author: false</code> in page to avoid fallback to the default author.</p>
<p>Example:</p>
<ul>
<li>
<p>A single author name:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Multiple author names:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Author info object:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://mister-hope.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Multiple author info objects:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">author</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Mr.Hope</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://mister-hope.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    email</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mister-hope@outlook.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Meteorlxy</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="writing-date" tabindex="-1"><a class="header-anchor" href="#writing-date"><span>Writing Date</span></a></h3>
<p>We recommend filling it with a standard date format. A standard format is in the form of <code v-pre>yyyy-mm-dd</code>, such as &quot;April 1, 2020&quot; should be written as <code v-pre>2020-04-01</code>.</p>
<p>Example:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2020-01-01</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>When running in a Git-based project, the writing date will fall back to first commit date of current file.</p>
</div>
<h3 id="category-and-tags" tabindex="-1"><a class="header-anchor" href="#category-and-tags"><span>Category and Tags</span></a></h3>
<p>See <RouteLink to="/demo/blog/category-and-tags.html">blog section</RouteLink> for details</p>
<h3 id="reading-time" tabindex="-1"><a class="header-anchor" href="#reading-time"><span>Reading Time</span></a></h3>
<p>The default statistic method is 300 words per minute. You can override it by setting <code v-pre>plugins.readingTime.wordPerMinute</code> in theme options. This option does not support individual configuration on the page.</p>
<h3 id="view-count" tabindex="-1"><a class="header-anchor" href="#view-count"><span>View Count <Badge text="Support page config" /></span></a></h3>
<p>When using Waline as <RouteLink to="/demo/001/comment.html">Comment Service</RouteLink>, this function is enabled by default.</p>
<p>Example:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">pageview</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


