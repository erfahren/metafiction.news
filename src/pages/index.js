import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
         <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Intro ⏱️ 🇺🇸  🐧
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`..: ${siteConfig.title} :..`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
<div id="cima" class="ContentMain">    
<h2>Welcome to my website.</h2>
<p>⏱️&nbsp;🇺🇸&nbsp;🐧&nbsp;—&nbsp;♪&nbsp;♩&nbsp;♬&nbsp;♫&nbsp;€&nbsp;®&nbsp;|&nbsp;©&nbsp;1⁄4&nbsp;1⁄2&nbsp;3⁄4&nbsp;¢&nbsp;°&nbsp;£</p> 
<p>(Last edited/updated 2026.02.25)</p>
<p>This website is a work in progress. There are some contrast issues but it's a testing template of sorts</p> 
<p>
<a href="#specialchar">HTML Special Characters</a> (lower in page)
</p>
<h2 id="cima">HTML Color Codes</h2>
<p>HTML color codes and names.</p>
<h3 id="red" class="red">Red colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="lightsalmon">&nbsp;</td>
<td>lightsalmon</td>
<td>#FFA07A</td>
<td>rgb(255,160,122)</td>
</tr>
<tr>
<td class="salmon">&nbsp;</td>
<td>salmon</td>
<td>#FA8072</td>
<td>rgb(250,128,114)</td>
</tr>
<tr>
<td class="darksalmon">&nbsp;</td>
<td>darksalmon</td>
<td>#E9967A</td>
<td>rgb(233,150,122)</td>
</tr>
<tr>
<td class="lightcoral">&nbsp;</td>
<td>lightcoral</td>
<td>#F08080</td>
<td>rgb(240,128,128)</td>
</tr>
<tr>
<td class="indianred">&nbsp;</td>
<td>indianred</td>
<td>#CD5C5C</td>
<td>rgb(205,92,92)</td>
</tr>
<tr>
<td class="crimson">&nbsp;</td>
<td>crimson</td>
<td>#DC143C</td>
<td>rgb(220,20,60)</td>
</tr>
<tr>
<td class="firebrick">&nbsp;</td>
<td>firebrick</td>
<td>#B22222</td>
<td>rgb(178,34,34)</td>
</tr>
<tr>
<td class="red">&nbsp;</td>
<td>red</td>
<td>#FF0000</td>
<td>rgb(255,0,0)</td>
</tr>
<tr>
<td class="darkred">&nbsp;</td>
<td>darkred</td>
<td>#8B0000</td>
<td>rgb(139,0,0)</td>
</tr>
</table>
<h3 id="orange" class="orange">Orange colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="coral">&nbsp;</td>
<td>coral</td>
<td>#FF7F50</td>
<td>rgb(255,127,80)</td>
</tr>
<tr>
<td class="tomato">&nbsp;</td>
<td>tomato</td>
<td>#FF6347</td>
<td>rgb(255,99,71)</td>
</tr>
<tr>
<td class="orangered">&nbsp;</td>
<td>orangered</td>
<td>#FF4500</td>
<td>rgb(255,69,0)</td>
</tr>
<tr>
<td class="gold">&nbsp;</td>
<td>gold</td>
<td>#FFD700</td>
<td>rgb(255,215,0)</td>
</tr>
<tr>
<td class="orange">&nbsp;</td>
<td>orange</td>
<td>#FFA500</td>
<td>rgb(255,165,0)</td>
</tr>
<tr>
<td class="darkorange">&nbsp;</td>
<td>darkorange</td>
<td>#FF8C00</td>
<td>rgb(255,140,0)</td>
</tr>
</table>
<h3 id="yellow" class="yellow">Yellow colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="lightyellow">&nbsp;</td>
<td>lightyellow</td>
<td>#FFFFE0</td>
<td>rgb(255,255,224)</td>
</tr>
<tr>
<td class="lemonchiffon">&nbsp;</td>
<td>lemonchiffon</td>
<td>#FFFACD</td>
<td>rgb(255,250,205)</td>
</tr>
<tr>
<td class="lightgoldenrodyellow">&nbsp;</td>
<td>lightgoldenrodyellow</td>
<td>#FAFAD2</td>
<td>rgb(250,250,210)</td>
</tr>
<tr>
<td class="papayawhip">&nbsp;</td>
<td>papayawhip</td>
<td>#FFEFD5</td>
<td>rgb(255,239,213)</td>
</tr>
<tr>
<td class="moccasin">&nbsp;</td>
<td>moccasin</td>
<td>#FFE4B5</td>
<td>rgb(255,228,181)</td>
</tr>
<tr>
<td class="peachpuff">&nbsp;</td>
<td>peachpuff</td>
<td>#FFDAB9</td>
<td>rgb(255,218,185)</td>
</tr>
<tr>
<td class="palegoldenrod">&nbsp;</td>
<td>palegoldenrod</td>
<td>#EEE8AA</td>
<td>rgb(238,232,170)</td>
</tr>
<tr>
<td class="khaki">&nbsp;</td>
<td>khaki</td>
<td>#F0E68C</td>
<td>rgb(240,230,140)</td>
</tr>
<tr>
<td class="darkkhaki">&nbsp;</td>
<td>darkkhaki</td>
<td>#BDB76B</td>
<td>rgb(189,183,107)</td>
</tr>
<tr>
<td class="yellow">&nbsp;</td>
<td>yellow</td>
<td>#FFFF00</td>
<td>rgb(255,255,0)</td>
</tr>
</table>
<h3 id="green" class="green">Green colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="lawngreen">&nbsp;</td>
<td>lawngreen</td>
<td>#7CFC00</td>
<td>rgb(124,252,0)</td>
</tr>
<tr>
<td class="chartreuse">&nbsp;</td>
<td>chartreuse</td>
<td>#7FFF00</td>
<td>rgb(127,255,0)</td>
</tr>
<tr>
<td class="limegreen">&nbsp;</td>
<td>limegreen</td>
<td>#32CD32</td>
<td>rgb(50,205,50)</td>
</tr>
<tr>
<td class="lime">&nbsp;</td>
<td>lime</td>
<td>#00FF00</td>
<td>rgb(0.255.0)</td>
</tr>
<tr>
<td class="forestgreen">&nbsp;</td>
<td>forestgreen</td>
<td>#228B22</td>
<td>rgb(34,139,34)</td>
</tr>
<tr>
<td class="green">&nbsp;</td>
<td>green</td>
<td>#008000</td>
<td>rgb(0,128,0)</td>
</tr>
<tr>
<td class="darkgreen">&nbsp;</td>
<td>darkgreen</td>
<td>#006400</td>
<td>rgb(0,100,0)</td>
</tr>
<tr>
<td class="greenyellow">&nbsp;</td>
<td>greenyellow</td>
<td>#ADFF2F</td>
<td>rgb(173,255,47)</td>
</tr>
<tr>
<td class="yellowgreen">&nbsp;</td>
<td>yellowgreen</td>
<td>#9ACD32</td>
<td>rgb(154,205,50)</td>
</tr>
<tr>
<td class="springgreen">&nbsp;</td>
<td>springgreen</td>
<td>#00FF7F</td>
<td>rgb(0,255,127)</td>
</tr>
<tr>
<td class="mediumspringgreen">&nbsp;</td>
<td>mediumspringgreen</td>
<td>#00FA9A</td>
<td>rgb(0,250,154)</td>
</tr>
<tr>
<td class="lightgreen">&nbsp;</td>
<td>lightgreen</td>
<td>#90EE90</td>
<td>rgb(144,238,144)</td>
</tr>
<tr>
<td class="palegreen">&nbsp;</td>
<td>palegreen</td>
<td>#98FB98</td>
<td>rgb(152,251,152)</td>
</tr>
<tr>
<td class="darkseagreen">&nbsp;</td>
<td>darkseagreen</td>
<td>#8FBC8F</td>
<td>rgb(143,188,143)</td>
</tr>
<tr>
<td class="mediumseagreen">&nbsp;</td>
<td>mediumseagreen</td>
<td>#3CB371</td>
<td>rgb(60,179,113)</td>
</tr>
<tr>
<td class="seagreen">&nbsp;</td>
<td>seagreen</td>
<td>#2E8B57</td>
<td>rgb(46,139,87)</td>
</tr>
<tr>
<td class="olive">&nbsp;</td>
<td>olive</td>
<td>#808000</td>
<td>rgb(128,128,0)</td>
</tr>
<tr>
<td class="darkolivegreen">&nbsp;</td>
<td>darkolivegreen</td>
<td>#556B2F</td>
<td>rgb(85,107,47)</td>
</tr>
<tr>
<td class="olivedrab">&nbsp;</td>
<td>olivedrab</td>
<td>#6B8E23</td>
<td>rgb(107,142,35)</td>
</tr>
</table>
<h3 id="cyan" class="cyan">Cyan colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="lightcyan">&nbsp;</td>
<td>lightcyan</td>
<td>#E0FFFF</td>
<td>rgb(224,255,255)</td>
</tr>
<tr>
<td class="cyan">&nbsp;</td>
<td>cyan</td>
<td>#00FFFF</td>
<td>rgb(0,255,255)</td>
</tr>
<tr>
<td class="aqua">&nbsp;</td>
<td>aqua</td>
<td>#00FFFF</td>
<td>rgb(0,255,255)</td>
</tr>
<tr>
<td class="aquamarine">&nbsp;</td>
<td>aquamarine</td>
<td>#7FFFD4</td>
<td>rgb(127,255,212)</td>
</tr>
<tr>
<td class="mediumaquamarine">&nbsp;</td>
<td>mediumaquamarine</td>
<td>#66CDAA</td>
<td>rgb(102,205,170)</td>
</tr>
<tr>
<td class="paleturquoise">&nbsp;</td>
<td>paleturquoise</td>
<td>#AFEEEE</td>
<td>rgb(175,238,238)</td>
</tr>
<tr>
<td class="turquoise">&nbsp;</td>
<td>turquoise</td>
<td>#40E0D0</td>
<td>rgb(64,224,208)</td>
</tr>
<tr>
<td class="mediumturquoise">&nbsp;</td>
<td>mediumturquoise</td>
<td>#48D1CC</td>
<td>rgb(72,209,204)</td>
</tr>
<tr>
<td class="darkturquoise">&nbsp;</td>
<td>darkturquoise</td>
<td>#00CED1</td>
<td>rgb(0,206,209)</td>
</tr>
<tr>
<td class="lightseagreen">&nbsp;</td>
<td>lightseagreen</td>
<td>#20B2AA</td>
<td>rgb(32,178,170)</td>
</tr>
<tr>
<td class="cadetblue">&nbsp;</td>
<td>cadetblue</td>
<td>#5F9EA0</td>
<td>rgb(95,158,160)</td>
</tr>
<tr>
<td class="darkcyan">&nbsp;</td>
<td>darkcyan</td>
<td>#008B8B</td>
<td>rgb(0,139,139)</td>
</tr>
<tr>
<td class="teal">&nbsp;</td>
<td>teal</td>
<td>#008080</td>
<td>rgb(0,128,128)</td>
</tr>
</table>
<h3 id="blue" class="blue">Blue colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="powderblue">&nbsp;</td>
<td>powderblue</td>
<td>#B0E0E6</td>
<td>rgb(176,224,230)</td>
</tr>
<tr>
<td class="lightblue">&nbsp;</td>
<td>lightblue</td>
<td>#ADD8E6</td>
<td>rgb(173,216,230)</td>
</tr>
<tr>
<td class="lightskyblue">&nbsp;</td>
<td>lightskyblue</td>
<td>#87CEFA</td>
<td>rgb(135,206,250)</td>
</tr>
<tr>
<td class="skyblue">&nbsp;</td>
<td>skyblue</td>
<td>#87CEEB</td>
<td>rgb(135,206,235)</td>
</tr>
<tr>
<td class="deepskyblue">&nbsp;</td>
<td>deepskyblue</td>
<td>#00BFFF</td>
<td>rgb(0,191,255)</td>
</tr>
<tr>
<td class="lightsteelblue">&nbsp;</td>
<td>lightsteelblue</td>
<td>#B0C4DE</td>
<td>rgb(176,196,222)</td>
</tr>
<tr>
<td class="dodgerblue">&nbsp;</td>
<td>dodgerblue</td>
<td>#1E90FF</td>
<td>rgb(30,144,255)</td>
</tr>
<tr>
<td class="cornflowerblue">&nbsp;</td>
<td>cornflowerblue</td>
<td>#6495ED</td>
<td>rgb(100,149,237)</td>
</tr>
<tr>
<td class="steelblue">&nbsp;</td>
<td>steelblue</td>
<td>#4682B4</td>
<td>rgb(70,130,180)</td>
</tr>
<tr>
<td class="royalblue">&nbsp;</td>
<td>royalblue</td>
<td>#4169E1</td>
<td>rgb(65,105,225)</td>
</tr>
<tr>
<td class="blue">&nbsp;</td>
<td>blue</td>
<td>#0000FF</td>
<td>rgb(0,0,255)</td>
</tr>
<tr>
<td class="mediumblue">&nbsp;</td>
<td>mediumblue</td>
<td>#0000CD</td>
<td>rgb(0,0,205)</td>
</tr>
<tr>
<td class="darkblue">&nbsp;</td>
<td>darkblue</td>
<td>#00008B</td>
<td>rgb(0,0,139)</td>
</tr>
<tr>
<td class="navy">&nbsp;</td>
<td>navy</td>
<td>#000080</td>
<td>rgb(0,0,128)</td>
</tr>
<tr>
<td class="midnightblue">&nbsp;</td>
<td>midnightblue</td>
<td>#191970</td>
<td>rgb(25,25,112)</td>
</tr>
<tr>
<td class="mediumslateblue">&nbsp;</td>
<td>mediumslateblue</td>
<td>#7B68EE</td>
<td>rgb(123,104,238)</td>
</tr>
<tr>
<td class="slateblue">&nbsp;</td>
<td>slateblue</td>
<td>#6A5ACD</td>
<td>rgb(106,90,205)</td>
</tr>
<tr>
<td class="darkslateblue">&nbsp;</td>
<td>darkslateblue</td>
<td>#483D8B</td>
<td>rgb(72,61,139)</td>
</tr>
</table>
<h3 id="purple" class="purple">Purple colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />&nbsp;Color Name</th>
<th>Hex Code<br />&nbsp;#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="lavender">&nbsp;</td>
<td>lavender</td>
<td>#E6E6FA</td>
<td>rgb(230,230,250)</td>
</tr>
<tr>
<td class="thistle">&nbsp;</td>
<td>thistle</td>
<td>#D8BFD8</td>
<td>rgb(216,191,216)</td>
</tr>
<tr>
<td class="plum">&nbsp;</td>
<td>plum</td>
<td>#DDA0DD</td>
<td>rgb(221,160,221)</td>
</tr>
<tr>
<td class="violet">&nbsp;</td>
<td>violet</td>
<td>#EE82EE</td>
<td>rgb(238,130,238)</td>
</tr>
<tr>
<td class="orchid">&nbsp;</td>
<td>orchid</td>
<td>#DA70D6</td>
<td>rgb(218,112,214)</td>
</tr>
<tr>
<td class="fuchsia">&nbsp;</td>
<td>fuchsia</td>
<td>#FF00FF</td>
<td>rgb(255,0,255)</td>
</tr>
<tr>
<td class="magenta">&nbsp;</td>
<td>magenta</td>
<td>#FF00FF</td>
<td>rgb(255,0,255)</td>
</tr>
<tr>
<td class="mediumorchid">&nbsp;</td>
<td>mediumorchid</td>
<td>#BA55D3</td>
<td>rgb(186,85,211)</td>
</tr>
<tr>
<td class="mediumpurple">&nbsp;</td>
<td>mediumpurple</td>
<td>#9370DB</td>
<td>rgb(147,112,219)</td>
</tr>
<tr>
<td class="blueviolet">&nbsp;</td>
<td>blueviolet</td>
<td>#8A2BE2</td>
<td>rgb(138,43,226)</td>
</tr>
<tr>
<td class="darkviolet">&nbsp;</td>
<td>darkviolet</td>
<td>#9400D3</td>
<td>rgb(148,0,211)</td>
</tr>
<tr>
<td class="darkorchid">&nbsp;</td>
<td>darkorchid</td>
<td>#9932CC</td>
<td>rgb(153,50,204)</td>
</tr>
<tr>
<td class="darkmagenta">&nbsp;</td>
<td>darkmagenta</td>
<td>#8B008B</td>
<td>rgb(139,0,139)</td>
</tr>
<tr>
<td class="purple">&nbsp;</td>
<td>purple</td>
<td>#800080</td>
<td>rgb(128,0,128)</td>
</tr>
<tr>
<td class="indigo">&nbsp;</td>
<td>indigo</td>
<td>#4B0082</td>
<td>rgb(75,0,130)</td>
</tr>
</table>
<h3 id="pink0" class="pink">Pink colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="pink">&nbsp;</td>
<td>pink</td>
<td>#FFC0CB</td>
<td>rgb(255,192,203)</td>
</tr>
<tr>
<td class="lightpink">&nbsp;</td>
<td>lightpink</td>
<td>#FFB6C1</td>
<td>rgb(255,182,193)</td>
</tr>
<tr>
<td class="hotpink">&nbsp;</td>
<td>hotpink</td>
<td>#FF69B4</td>
<td>rgb(255,105,180)</td>
</tr>
<tr>
<td class="deeppink">&nbsp;</td>
<td>deeppink</td>
<td>#FF1493</td>
<td>rgb(255,20,147)</td>
</tr>
<tr>
<td class="palevioletred">&nbsp;</td>
<td>palevioletred</td>
<td>#DB7093</td>
<td>rgb(219,112,147)</td>
</tr>
<tr>
<td class="mediumvioletred">&nbsp;</td>
<td>mediumvioletred</td>
<td>#C71585</td>
<td>rgb(199,21,133)</td>
</tr>
</table>
<h3 id="white" class="white">White colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="white">&nbsp;</td>
<td>white</td>
<td>#FFFFFF</td>
<td>rgb(255,255,255)</td>
</tr>
<tr>
<td class="snow">&nbsp;</td>
<td>snow</td>
<td>#FFFAFA</td>
<td>rgb(255,250,250)</td>
</tr>
<tr>
<td class="honeydew">&nbsp;</td>
<td>honeydew</td>
<td>#F0FFF0</td>
<td>rgb(240,255,240)</td>
</tr>
<tr>
<td class="mintcream">&nbsp;</td>
<td>mintcream</td>
<td>#F5FFFA</td>
<td>rgb(245,255,250)</td>
</tr>
<tr>
<td class="azure">&nbsp;</td>
<td>azure</td>
<td>#F0FFFF</td>
<td>rgb(240,255,255)</td>
</tr>
<tr>
<td class="aliceblue">&nbsp;</td>
<td>aliceblue</td>
<td>#F0F8FF</td>
<td>rgb(240,248,255)</td>
</tr>
<tr>
<td class="ghostwhite">&nbsp;</td>
<td>ghostwhite</td>
<td>#F8F8FF</td>
<td>rgb(248,248,255)</td>
</tr>
<tr>
<td class="whitesmoke">&nbsp;</td>
<td>whitesmoke</td>
<td>#F5F5F5</td>
<td>rgb(245,245,245)</td>
</tr>
<tr>
<td class="seashell">&nbsp;</td>
<td>seashell</td>
<td>#FFF5EE</td>
<td>rgb(255,245,238)</td>
</tr>
<tr>
<td class="beige">&nbsp;</td>
<td>beige</td>
<td>#F5F5DC</td>
<td>rgb(245,245,220)</td>
</tr>
<tr>
<td class="oldlace">&nbsp;</td>
<td>oldlace</td>
<td>#FDF5E6</td>
<td>rgb(253,245,230)</td>
</tr>
<tr>
<td class="floralwhite">&nbsp;</td>
<td>floralwhite</td>
<td>#FFFAF0</td>
<td>rgb(255,250,240)</td>
</tr>
<tr>
<td class="ivory">&nbsp;</td>
<td>ivory</td>
<td>#FFFFF0</td>
<td>rgb(255,255,240)</td>
</tr>
<tr>
<td class="antiquewhite">&nbsp;</td>
<td>antiquewhite</td>
<td>#FAEBD7</td>
<td>rgb(250,235,215)</td>
</tr>
<tr>
<td class="linen">&nbsp;</td>
<td>linen</td>
<td>#FAF0E6</td>
<td>rgb(250,240,230)</td>
</tr>
<tr>
<td class="lavenderblush">&nbsp;</td>
<td>lavenderblush</td>
<td>#FFF0F5</td>
<td>rgb(255,240,245)</td>
</tr>
<tr>
<td class="mistyrose">&nbsp;</td>
<td>mistyrose</td>
<td>#FFE4E1</td>
<td>rgb(255,228,225)</td>
</tr>
</table>
<h3 id="gray" class="gray">Gray colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="gainsboro">&nbsp;</td>
<td>gainsboro</td>
<td>#DCDCDC</td>
<td>rgb(220,220,220)</td>
</tr>
<tr>
<td class="lightgray">&nbsp;</td>
<td>lightgray</td>
<td>#D3D3D3</td>
<td>rgb(211,211,211)</td>
</tr>
<tr>
<td class="silver">&nbsp;</td>
<td>silver</td>
<td>#C0C0C0</td>
<td>rgb(192,192,192)</td>
</tr>
<tr>
<td class="darkgray">&nbsp;</td>
<td>darkgray</td>
<td>#A9A9A9</td>
<td>rgb(169,169,169)</td>
</tr>
<tr>
<td class="gray">&nbsp;</td>
<td>gray</td>
<td>#808080</td>
<td>rgb(128,128,128)</td>
</tr>
<tr>
<td class="dimgray">&nbsp;</td>
<td>dimgray</td>
<td>#696969</td>
<td>rgb(105,105,105)</td>
</tr>
<tr>
<td class="lightslategray">&nbsp;</td>
<td>lightslategray</td>
<td>#778899</td>
<td>rgb(119,136,153)</td>
</tr>
<tr>
<td class="slategray">&nbsp;</td>
<td>slategray</td>
<td>#708090</td>
<td>rgb(112,128,144)</td>
</tr>
<tr>
<td class="darkslategray">&nbsp;</td>
<td>darkslategray</td>
<td>#2F4F4F</td>
<td>rgb(47,79,79)</td>
</tr>
<tr>
<td class="black">&nbsp;</td>
<td>black</td>
<td>#000000</td>
<td>rgb(0,0,0)</td>
</tr>
</table>
<h3 id="brown" class="brown">Brown colors</h3>
<table class="center">
<tr>
<th>Color</th>
<th>HTML / CSS<br />Color Name</th>
<th>Hex Code<br />#RRGGBB</th>
<th>Decimal Code<br />(R,G,B)</th>
</tr>
<tr>
<td class="cornsilk">&nbsp;</td>
<td>cornsilk</td>
<td>#FFF8DC</td>
<td>rgb(255,248,220)</td>
</tr>
<tr>
<td class="blanchedalmond">&nbsp;</td>
<td>blanchedalmond</td>
<td>#FFEBCD</td>
<td>rgb(255,235,205)</td>
</tr>
<tr>
<td class="bisque">&nbsp;</td>
<td>bisque</td>
<td>#FFE4C4</td>
<td>rgb(255,228,196)</td>
</tr>
<tr>
<td class="navajowhite">&nbsp;</td>
<td>navajowhite</td>
<td>#FFDEAD</td>
<td>rgb(255,222,173)</td>
</tr>
<tr>
<td class="wheat">&nbsp;</td>
<td>wheat</td>
<td>#F5DEB3</td>
<td>rgb(245,222,179)</td>
</tr>
<tr>
<td class="burlywood">&nbsp;</td>
<td>burlywood</td>
<td>#DEB887</td>
<td>rgb(222,184,135)</td>
</tr>
<tr>
<td class="tan">&nbsp;</td>
<td>tan</td>
<td>#D2B48C</td>
<td>rgb(210,180,140)</td>
</tr>
<tr>
<td class="rosybrown">&nbsp;</td>
<td>rosybrown</td>
<td>#BC8F8F</td>
<td>rgb(188,143,143)</td>
</tr>
<tr>
<td class="sandybrown">&nbsp;</td>
<td>sandybrown</td>
<td>#F4A460</td>
<td>rgb(244,164,96)</td>
</tr>
<tr>
<td class="goldenrod">&nbsp;</td>
<td>goldenrod</td>
<td>#DAA520</td>
<td>rgb(218,165,32)</td>
</tr>
<tr>
<td class="peru">&nbsp;</td>
<td>peru</td>
<td>#CD853F</td>
<td>rgb(205,133,63)</td>
</tr>
<tr>
<td class="chocolate">&nbsp;</td>
<td>chocolate</td>
<td>#D2691E</td>
<td>rgb(210,105,30)</td>
</tr>
<tr>
<td class="saddlebrown">&nbsp;</td>
<td>saddlebrown</td>
<td>#8B4513</td>
<td>rgb(139,69,19)</td>
</tr>
<tr>
<td class="sienna">&nbsp;</td>
<td>sienna</td>
<td>#A0522D</td>
<td>rgb(160,82,45)</td>
</tr>
<tr>
<td class="brown">&nbsp;</td>
<td>brown</td>
<td>#A52A2A</td>
<td>rgb(165,42,42)</td>
</tr>
<tr>
<td class="maroon">&nbsp;</td>
<td>maroon</td>
<td>#800000</td>
<td>rgb(128,0,0)</td>
</tr>
</table> 
<hr class="ornate" />
<h3>HTML Special Characters</h3>
<table id="specialchar" class="center">
<tr><th> HTML &nbsp; <br />code &nbsp; </th>
    <th>symb</th> <th> &nbsp; Name </th> <th> &nbsp; </th>
</tr>
<tr><td class="code">&amp;amp;</td>
    <td> &amp; </td> <td> ampersand </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;gt;</td>
    <td> &gt; </td> <td> greater than </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;lt;</td>
    <td> &lt; </td> <td> less than </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;quot;</td>
    <td> &quot; </td> <td> double quote </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;nbsp;</td>
    <td> &nbsp; </td> <td> non-breaking space </td>
    <td>A bunch of these (&rarr;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &larr;) aren't displayed as one 
space like spaces (&rarr;              &larr;)</td>
</tr>
<tr><td class="code">&amp;iquest;</td>
    <td> &iquest; </td> <td> inverted question mark </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;iexcl;</td>
    <td> &iexcl; </td> <td> inverted exclamation mark </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;sect;</td>
    <td> &sect; </td> <td> section </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;para;</td>
    <td> &para; </td> <td> paragraph </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;bull;</td>
    <td> &bull; </td> <td> bullet </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;#<strong>ascii</strong>;</td>
    <td> </td> <td> ASCII character for decimal <strong>ascii</strong></td> <td> &nbsp; </td> 
</tr>

<tr><td></td>
    <td colspan="3">The following don't show up in some fonts.</td>
</tr>

<tr><td class="code">&amp;dagger;</td>
    <td> &dagger; </td> <td> dagger </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;Dagger;</td>
    <td> &Dagger; </td> <td> double dagger </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;mdash;</td>
    <td> &mdash; </td> <td> em-dash </td>
    <td>instead of &nbsp; -</td>
</tr>
<tr><td class="code">&amp;ndash;</td>
    <td> &ndash; </td> <td> en-dash </td>
    <td>instead of &nbsp; -</td>
</tr>
<tr><td class="code">&amp;apos;</td>
    <td> &apos; </td> <td> apostrophe </td>
    <td>instead of &nbsp; '</td>
</tr>
<tr><td class="code">&amp;lsquo;</td>
    <td> &lsquo; </td> <td> left single quote </td>
    <td>instead of &nbsp; ' or `</td>
</tr>
<tr><td class="code">&amp;rsquo;</td>
    <td> &rsquo; </td> <td> right single quote </td>
    <td>instead of &nbsp; '</td>
</tr>
<tr><td class="code">&amp;ldquo;</td>
    <td> &ldquo; </td> <td> left double quote </td>
    <td>instead of &nbsp; "</td>
</tr>
<tr><td class="code">&amp;rdquo;</td>
    <td> &rdquo; </td> <td> right double quote </td>
    <td>instead of &nbsp; "</td>
</tr>
<tr><td class="code">&amp;lsaquo;</td>
    <td> &lsaquo; </td> <td> left single angle quotes </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;rsaquo;</td>
    <td> &rsaquo; </td> <td> right single angle quotes </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;laquo;</td>
    <td> &laquo; </td> <td> left (double) angle quote</td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;raquo;</td>
    <td> &raquo; </td> <td> right (double) angle quote </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;loz;</td>
    <td> &loz; </td> <td> lozenge </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;spades;</td>
    <td> &spades; </td> <td> spade suit </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;clubs;</td>
    <td> &clubs; </td> <td> club suit </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;hearts;</td>
  <td> &hearts; </td> <td> heart suit </td> <td> (color it with a css style attribute) </td> 
</tr>
<tr><td class="code">&amp;diams;</td>
    <td> &diams; </td> <td> diamond suit </td> <td>(color it with a css style attribute) </td> 
</tr>
</table>

<p id="Math" class="label">
Codes for Math
</p>
<table class="center">
<tr><th> HTML &nbsp; <br />code &nbsp; </th>
    <th>symb</th> <th> &nbsp; Name </th> <th> &nbsp; </th>
</tr>
<tr><td class="code">&amp;sup2;</td>
    <td> x&sup2; </td> <td> superscript 2 </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;sup3;</td>
    <td> x&sup3; </td> <td> superscript 3 </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;int;</td>
    <td> &int; </td> <td> integral </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;sum;</td>
    <td> &sum; </td> <td> summation </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;prod;</td>
    <td> &prod; </td> <td> product </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;fnof;</td>
    <td> &fnof; </td> <td> Latin f with hook </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;radic;</td>
    <td> &radic; </td> <td> square root </td>
    <td>cube root could be &sup3;&radic;</td>
</tr>
<tr><td class="code">&amp;minus;</td>
    <td> &minus; </td> <td> minus </td>
    <td>instead of &nbsp; -</td>
</tr>
<tr><td class="code">&amp;plusmn;</td>
    <td> &plusmn; </td> <td> plus/minus </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;infin;</td>
    <td> &infin; </td> <td> infinity </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;asymp;</td>
    <td> &asymp; </td> <td> approximately equal </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;prop;</td>
    <td> &prop; </td> <td> proportional </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;equiv;</td>
    <td> &equiv; </td> <td> equivalent </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;ne;</td>
    <td> &ne; </td> <td> not equal </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;le;</td>
    <td> &le; </td> <td> less than or equal </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;ge;</td>
    <td> &ge; </td> <td> greater than or eqal </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;times;</td>
    <td> &times; </td> <td> times </td>
    <td>instead of x or *</td>
</tr>
<tr><td class="code">&amp;middot;</td>
    <td> &middot; </td> <td> dot </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;divide;</td>
    <td> &divide; </td> <td> divide </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;part;</td>
    <td> &part; </td> <td> partial derivative </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;prime;</td>
    <td> &prime; </td> <td> prime </td>
    <td>instead of &nbsp; '</td>
</tr>
<tr><td class="code">&amp;Prime;</td>
    <td> &Prime; </td> <td> double prime </td>
    <td>instead of &nbsp; "</td>
</tr>
<tr><td class="code">&amp;deg;</td>
    <td> &deg; </td> <td> degree </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;there4;</td>
    <td> &there4; </td> <td> therefore </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;oslash;</td>
    <td> &oslash; </td> <td> empty set </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;isin;</td>
    <td> &isin; </td> <td> member </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;notin;</td>
    <td> &notin; </td> <td> not member </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;cap;</td>
    <td> &cap; </td> <td> cap </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;cup;</td>
    <td> &cup; </td> <td> cup </td>
    <td>instead of &nbsp; U</td>
</tr>
<tr><td class="code">&amp;sub;</td>
    <td> &sub; </td> <td> proper subset </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;sup;</td>
    <td> &sup; </td> <td> proper superset </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;sube;</td>
    <td> &sube; </td> <td> subset </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;supe;</td>
    <td> &supe; </td> <td> superset </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;not;</td>
    <td> &not; </td> <td> not </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;and;</td>
    <td> &and; </td> <td> and </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;or;</td>
    <td> &or; </td> <td> or </td>
    <td>instead of &nbsp; V</td>
</tr>
<tr><td class="code">&amp;exist;</td>
    <td> &exist; </td> <td> there exists </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;forall;</td>
    <td> &forall; </td> <td> for all </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;rarr;</td>
    <td> &rarr; </td> <td> right arrow </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;larr;</td>
    <td> &larr; </td> <td> left arrow </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;harr;</td>
    <td> &harr; </td> <td> arrow </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;rArr;</td>
    <td> &rArr; </td> <td> right double arrow </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;lArr;</td>
    <td> &lArr; </td> <td> left double arrow </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;hArr;</td>
    <td> &hArr; </td> <td> double arrow </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;oplus;</td>
    <td> &oplus; </td> <td> circled plus</td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;otimes;</td>
    <td> &otimes; </td> <td> circled times</td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;perp;</td>
    <td> &perp; </td> <td> bottom </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;lceil;</td>
    <td> &lceil; </td> <td> left ceiling </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;rceil;</td>
    <td> &rceil; </td> <td> right ceiling </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;lfloor;</td>
    <td> &lfloor; </td> <td> left floor </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;rfloor;</td>
    <td> &rfloor; </td> <td> right floor </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;nabla;</td>
    <td> &nabla; </td> <td> nabla </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;permil;</td>
    <td> &permil; </td> <td> per mil </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;hellip;</td>
    <td> &hellip; </td> <td> horizontal ellipsis </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;weierp;</td>
    <td> &weierp; </td> <td> script capital P </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;image;</td>
    <td> &image; </td> <td> blackletter capital I </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;real;</td>
    <td> &real; </td> <td> blackletter capital R</td> <td> &nbsp; </td> 
</tr>
</table>

<p id="Greek" class="label">
Codes for Greek (and Hebrew Aleph)
</p>
<table class="center">
<tr><td class="code">&amp;alefsym;</td>
    <td> &alefsym; </td> <td> Hebrew aleph </td>
</tr>
<tr><td>&nbsp;</td>
    <td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </td> 
    <td> &nbsp; </td> 
</tr>
</table>

<table class="center">
<tr>
  <td class="code">&amp;alpha; </td>
  <td>&alpha;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Alpha; </td>
  <td>&Alpha;</td>
</tr>
<tr>
  <td class="code">&amp;beta; </td>
  <td>&beta;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Beta; </td>
  <td>&Beta;</td>
</tr>
<tr>
  <td class="code">&amp;gamma; </td>
  <td>&gamma;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Gamma; </td>
  <td>&Gamma;</td>
</tr>
<tr>
  <td class="code">&amp;delta; </td>
  <td>&delta;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Delta; </td>
  <td>&Delta;</td>
</tr>
<tr>
  <td class="code">&amp;epsilon; </td>
  <td>&epsilon;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Epsilon; </td>
  <td>&Epsilon;</td>
</tr>
<tr>
  <td class="code">&amp;zeta; </td>
  <td>&zeta;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Zeta; </td>
  <td>&Zeta;</td>
</tr>
<tr>
  <td class="code">&amp;eta; </td>
  <td>&eta;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Eta; </td>
  <td>&Eta;</td>
</tr>
<tr>
  <td class="code">&amp;theta; or <br /> &amp;thetasym; </td>
  <td>&theta; or &thetasym;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Theta; </td>
  <td>&Theta;</td>
</tr>
<tr>
  <td class="code">&amp;iota; </td>
  <td>&iota;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Iota; </td>
  <td>&Iota;</td>
</tr>
<tr>
  <td class="code">&amp;kappa; </td>
  <td>&kappa;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Kappa; </td>
  <td>&Kappa;</td>
</tr>
<tr>
  <td class="code">&amp;lambda; </td>
  <td>&lambda;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Lambda; </td>
  <td>&Lambda;</td>
</tr>
<tr>
  <td class="code">&amp;mu; or <br /> &amp;micro; </td>
  <td>&mu; or &micro;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Mu; </td>
  <td>&Mu;</td>
</tr>
<tr>
  <td class="code">&amp;nu; </td>
  <td>&nu;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Nu; </td>
  <td>&Nu;</td>
</tr>
<tr>
  <td class="code">&amp;xi; </td>
  <td>&xi;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Xi; </td>
  <td>&Xi;</td>
</tr>
<tr>
  <td class="code">&amp;omicron; </td>
  <td>&omicron;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Omicron; </td>
  <td>&Omicron;</td>
</tr>
<tr>
  <td class="code">&amp;pi; or <br /> &amp;piv; </td>
  <td>&pi; or &piv;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Pi; </td>
  <td>&Pi;</td>
</tr>
<tr>
  <td class="code">&amp;rho; </td>
  <td>&rho;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Rho; </td>
  <td>&Rho;</td>
</tr>
<tr>
  <td class="code">&amp;sigma; </td>
  <td>&sigma;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Sigma; </td>
  <td>&Sigma;</td>
</tr>
<tr>
  <td class="code">&amp;tau; </td>
  <td>&tau;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Tau; </td>
  <td>&Tau;</td>
</tr>
<tr>
  <td class="code">&amp;upsilon; </td>
  <td>&upsilon;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Upsilon; </td>
  <td>&Upsilon;</td>
</tr>
<tr>
  <td class="code">&amp;upsih; </td>
  <td>&upsih;</td>
  <td> &nbsp; </td>
  <td colspan="2"> upsilon with hook</td>
</tr>
<tr>
  <td class="code">&amp;phi; </td>
  <td>&phi;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Phi; </td>
  <td>&Phi;</td>
</tr>
<tr>
  <td class="code">&amp;chi; </td>
  <td>&chi;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Chi; </td>
  <td>&Chi;</td>
</tr>
<tr>
  <td class="code">&amp;psi; </td>
  <td>&psi;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Psi; </td>
  <td>&Psi;</td>
</tr>
<tr>
  <td class="code">&amp;omega; </td>
  <td>&omega;</td>
  <td> &nbsp; </td>
  <td class="code">&amp;Omega; </td>
  <td>&Omega;</td>
</tr>
</table>

<p id="Business" class="label">
Codes for Business
</p>
<table class="center">
<tr><th> HTML &nbsp; <br />code &nbsp; </th>
    <th>symb</th> <th> &nbsp; Name </th> <th> &nbsp; </th>
</tr>
<tr><td class="code">&amp;cent;</td>
    <td> &cent; </td> <td> Cent </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;euro;</td>
    <td> &euro; </td> <td> Euro </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;pound;</td>
    <td> &pound; </td> <td> Pound sterling </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;yen;</td>
    <td> &yen; </td> <td> Yen </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;curren;</td>
    <td> &curren; </td> <td> currency </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;copy;</td>
    <td> &copy; </td> <td> copyright mark </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;reg;</td>
    <td> &reg; </td> <td> registered trademark </td> <td> &nbsp; </td> 
</tr>
<tr><td class="code">&amp;trade;</td>
    <td> &trade; </td> <td> trademark </td> 
    <td> &nbsp; </td>
</tr>
</table>

<p id="ForeignLetters" class="label">
Codes for Letters From Other Languages
</p>

<table class="center">
<tr>
<td></td>
<th>acute<br />accent</th>
<th>grave<br />accent</th>
<th>dieresis or<br />umlaut mark</th>
<th>circumflex<br />accent</th>
<th>breve<br />accent</th>
<th>tilde</th>
<th></th>
</tr>

<tr>
<th>capital A</th>
<td class="code">&amp;Aacute;(&Aacute;)</td>
<td class="code">&amp;Agrave;(&Agrave;)</td>
<td class="code">&amp;Auml;(&Auml;)</td>
<td class="code">&amp;Acirc;(&Acirc;)</td>
<td class="code">&amp;Abreve;(&Abreve;)</td>
<td class="code">&amp;Atilde;(&Atilde;)</td>
<td class="code">&amp;Aring;(&Aring;)</td>
</tr>

<tr>
<th>small a</th>
<td class="code">&amp;aacute;(&aacute;)</td>
<td class="code">&amp;agrave;(&agrave;)</td>
<td class="code">&amp;auml;(&auml;)</td>
<td class="code">&amp;acirc;(&acirc;)</td>
<td class="code">&amp;abreve;(&abreve;)</td>
<td class="code">&amp;atilde;(&atilde;)</td>
<td class="code">&amp;aring;(&aring;)</td>
</tr>

<tr>
<th>capital E</th>
<td class="code">&amp;Eacute;(&Eacute;)</td>
<td class="code">&amp;Egrave;(&Egrave;)</td>
<td class="code">&amp;Euml;(&Euml;)</td>
<td class="code">&amp;Ecirc;(&Ecirc;)</td>
<td> </td>
<td></td>
<td></td>
</tr>

<tr>
<th>small e</th>
<td class="code">&amp;eacute;(&eacute;)</td>
<td class="code">&amp;egrave;(&egrave;)</td>
<td class="code">&amp;euml;(&euml;)</td>
<td class="code">&amp;ecirc;(&ecirc;)</td>
<td> </td>
<td></td>
<td></td>
</tr>

<tr>
<th>capital I</th>
<td class="code">&amp;Iacute;(&Iacute;)</td>
<td class="code">&amp;Igrave;(&Igrave;)</td>
<td class="code">&amp;Iuml;(&Iuml;)</td>
<td class="code">&amp;Icirc;(&Icirc;)</td>
<td> </td>
<td></td>
<td></td>
</tr>

<tr>
<th>small i</th>
<td class="code">&amp;iacute;(&iacute;)</td>
<td class="code">&amp;igrave;(&igrave;)</td>
<td class="code">&amp;iuml;(&iuml;)</td>
<td class="code">&amp;icirc;(&icirc;)</td>
<td> </td>
<td></td>
<td></td>
</tr>

<tr>
<th>capital O</th>
<td class="code">&amp;Oacute;(&Oacute;)</td>
<td class="code">&amp;Ograve;(&Ograve;)</td>
<td class="code">&amp;Ouml;(&Ouml;)</td>
<td class="code">&amp;Ocirc;(&Ocirc;)</td>
<td> </td>
<td class="code">&amp;Otilde;(&Otilde;)</td>
<td class="code">&amp;Oslash;(&Oslash;)</td>
</tr>

<tr>
<th>small o</th>
<td class="code">&amp;oacute;(&oacute;)</td>
<td class="code">&amp;ograve;(&ograve;)</td>
<td class="code">&amp;ouml;(&ouml;)</td>
<td class="code">&amp;ocirc;(&ocirc;)</td>
<td> </td>
<td class="code">&amp;otilde;(&otilde;)</td>
<td class="code">&amp;oslash;(&oslash;)</td>
</tr>

<tr>
<th>capital U</th>
<td class="code">&amp;Uacute;(&Uacute;)</td>
<td class="code">&amp;Ugrave;(&Ugrave;)</td>
<td class="code">&amp;Uuml;(&Uuml;)</td>
<td class="code">&amp;Ucirc;(&Ucirc;)</td>
<td class="code">&amp;Ubreve;(&Ubreve;)</td>
<td></td>
<td></td>
</tr>

<tr>
<th>small u</th>
<td class="code">&amp;uacute;(&uacute;)</td>
<td class="code">&amp;ugrave;(&ugrave;)</td>
<td class="code">&amp;uuml;(&uuml;)</td>
<td class="code">&amp;ucirc;(&ucirc;)</td>
<td class="code">&amp;ubreve;(&ubreve;)</td>
<td></td>
<td></td>
</tr>

</table>

<table class="center">
<tr><td> &nbsp; </td> <td> &nbsp; </td> <td> &nbsp; </td></tr>
<tr><td class="code">&amp;AElig;</td>
    <td> &AElig; </td> <td> capital AE diphthong (ligature) </td>
</tr>
<tr><td class="code">&amp;aelig;</td>
    <td> &aelig; </td> <td> small ae diphthong (ligature) </td>
</tr>
<tr><td class="code">&amp;Ccedil;</td>
    <td> &Ccedil; </td> <td> capital C, cedilla </td>
</tr>
<tr><td class="code">&amp;ccedil;</td>
    <td> &ccedil; </td> <td> capital c, cedilla </td>
</tr>
<tr><td class="code">&amp;ETH;</td>
    <td> &ETH; </td> <td> capital Eth, Icelandic </td>
</tr>
<tr><td class="code">&amp;eth;</td>
    <td> &eth; </td> <td> small eth, Icelandic </td>
</tr>
<tr><td class="code">&amp;Ntilde;</td>
    <td> &Ntilde; </td> <td> capital N, tilde </td>
</tr>
<tr><td class="code">&amp;ntilde;</td>
    <td> &ntilde; </td> <td> small n, tilde </td>
</tr>
<tr><td class="code">&amp;#337;</td>
    <td> &#337; </td> <td> o with double acute accent, Hungarian </td>
</tr>
<tr><td class="code">&amp;scedil;</td>
    <td> &scedil; </td> <td> small s, cedilla </td>
</tr>
<tr><td class="code">&amp;szlig;</td>
    <td> &szlig; </td> <td> small sharp s, German (sz ligature) </td>
</tr>
<tr><td class="code">&amp;THORN;</td>
    <td> &THORN; </td> <td> capital THORN, Icelandic </td>
</tr>
<tr><td class="code">&amp;thorn;</td>
    <td> &thorn; </td> <td> small thorn, Icelandic </td>
</tr>
<tr><td class="code">&amp;Yacute;</td>
    <td> &Yacute; </td> <td> capital Y, acute accent </td>
</tr>
<tr><td class="code">&amp;yacute;</td>
    <td> &yacute; </td> <td> small y, acute accent </td>
</tr>
<tr><td class="code">&amp;yuml;</td>
    <td> &yuml; </td> <td> small y, dieresis or umlaut mark </td>
</tr>
</table> 
<p class="x-large"><a href="#cima">Back to top</a></p>
      </div>          
      </main>
    </Layout>
  );
}
