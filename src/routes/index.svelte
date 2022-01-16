<script>
  import '@unocss/reset/normalize.css'
  import { tattoo } from "$lib/tattoo";
  import Slider from "$lib/slider.svelte";
  import 'uno.css';
  var me = 'hitchhooker';
  let mypublickey = "HkRdC1w5XDvQQadAS2nL58mPRBCLyUCZAAiaV7DUWJgj7P8";
</script>

<body on:load|once={tattoo()}>
  <div class="bg-gray-500">
  <b>me:</b> {me}<br>
  <b>myKey:</b> {mypublickey}<br>
  <b>myHead:</b> <span id="myHead"></span><br>
  <b>myHeadHex:</b>  <span id="myHeadHex"></span><br>
  <b>myHeadBinary:</b> <br> <span id="myHeadBinary"></span>
  <b>myHeadBitsArray:</b> <br> <code id="myHeadBits"></code>
  <b>myTattooType: </b>
  <br>Head address is <span id="myHeadBinaryLength"></span> bits starting from top and going clockwise in spiral just like in top right example.<br>
  122 black dots are true and
   the rest pink dots false.<br>
  </div>
  <b>myCustomTattoo:</b>
  <br>
  <br>
  <canvas id="myCanvas" width="550" height="250" style="border:0px;">
  Your browser does not support the HTML canvas tag.</canvas>
  <br>
  <br>
  <b>compareToSpiralTattooExample: </b><br>
  <a href="https://imgbb.com/"><img src="images/tattoo_example.png" alt="tattoo-example" border="0"></a>
  <br>
	<b>myTattoo: </b><br>
  <Slider></Slider>
  <b>myTattooCode: </b><br>
  <textarea readonly placeholder="tattoo.js prints here" style="width:100%;height:200px;">{tattoo}</textarea>
</body>