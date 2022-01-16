export function tattoo() {
    // values
    var me = 'hitchhooker';
    let mypublickey = "HkRdC1w5XDvQQadAS2nL58mPRBCLyUCZAAiaV7DUWJgj7P8";
    let address = "e4e22de5d60cf09f608238ec3eff9f501e7b43b0f215b0a035c330c0af043e0c";
    // lets draw the binary spiral
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    function canary(ctx, w, h, s, f = (ctx, path) => ctx.fill(path)) {
      let path = new Path2D(
        "M373.1,126.9c-5.2-4.1-11.4-9.7-22.7-11.1c-10.6-1.4-21.4,5.7-28.7,10.4c-7.3,4.7-21.1,18.5-26.8,22.7\
	          c-5.7,4.2-20.3,8.1-43.8,22.2s-115.7,73.3-115.7,73.3l24,0.3L52.4,299.8h10.7l-15.4,11.7c0,0,13.6,3.6,25-3.6l0,3.3\
	          c0,0,127.4-50.2,152-37.2l-15,4.4c1.3,0,25.5,1.6,25.5,1.6s0.8,15.1,15.4,24.8c14.6,9.6,14.9,14.9,14.9,14.9s-7.6,3.1-7.6,7\
	          c0,0,11.2-3.4,21.6-3.1c10.4,0.3,19.5,3.1,19.5,3.1s-0.8-4.2-10.9-7c-10.2-2.9-20.1-13.8-25-19.8c-4.9-6-8.3-16.7-4.1-27.4	c3.5-9.1,15.7-14.1,40.9-27.1c29.7-15.4,36.5-26.8,40.7-35.7c4.2-8.9,10.4-26.6,13.9-34.9c4.4-10.7,9.8-16.4,14.3-19.8 \
	          c4.4-3.4,24.5-10.9,24.5-10.9S378,130.8,373.1,126.9z"
      );
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.scale(s / 440, s / 440);
      ctx.translate(-220, -220);
      f(ctx, path);
      ctx.restore();
    }

    function hexToBits(hex) {
      let bits = [];
      for (var i = 0; i < 32; i++) {
        let byte = parseInt(hex.substr(i * 2, 2), 16);
        for (var j = 0; j < 8; ++j) {
          bits.push((byte & (1 << (7 - j))) != 0);
        }
      }
      return bits;
    }

    function tattoo_spiro(ctx, bits) {
      let cycles = 10;
      let limit = 0.768;
      let dot = 6 / 500;

      ctx.save();
      ctx.translate(0.5 - dot, 0.5 + dot);
      ctx.fillStyle = "black";

      var radius = 0.5 - dot;
      for (var i = 0; i < bits.length; i++) {
        radius -= ((0.5 / bits.length) * limit) / (radius * 4);
        ctx.rotate((((Math.PI * 2) / bits.length) * cycles) / (radius * 4));
        ctx.save();
        ctx.translate(0, -radius);
        ctx.beginPath();
        ctx.arc(0, 0, bits[i] ? dot : dot / 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = bits[i] ? "black" : "#e6007a";
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
      ctx.lineWidth = 10;
      canary(ctx, 1 - dot, 1 + dot, 240 / 500, (ctx, path) => {
        ctx.fill(path);
      });
    }
    function tattoo_spiro_mono(ctx, bits) {
      let cycles = 10;
      let limit = 0.768;
      let dot = 6 / 500;

      ctx.save();
      ctx.translate(0.5 - dot, 0.5 + dot);
      ctx.fillStyle = "black";

      var radius = 0.5 - dot;
      for (var i = 0; i < bits.length; i++) {
        radius -= ((0.5 / bits.length) * limit) / (radius * 4);
        ctx.rotate((((Math.PI * 2) / bits.length) * cycles) / (radius * 4));
        ctx.save();
        ctx.translate(0, -radius);
        ctx.beginPath();
        ctx.arc(0, 0, bits[i] ? dot : dot / 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = bits[i] ? "black" : "white";
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
      ctx.lineWidth = 10;
      canary(ctx, 1 - dot, 1 + dot, 240 / 500, (ctx, path) => {
        ctx.fill(path);
      });
    }
    let bits = hexToBits(address);

    ctx.save();
    ctx.translate(0, 0);
    ctx.scale(250, 250);
    tattoo_spiro(ctx, bits);
    ctx.restore();

    ctx.save();
    ctx.translate(275, 0);
    ctx.scale(250, 250);
    tattoo_spiro_mono(ctx, bits);
    ctx.restore();


  
    let myhead = mypublickey;
    let myheadhex = address;
    let myheadbits = bits;
    // bitsarray to binary
    var arrayLength = bits.length;
    let headbinary = "";
    var blackdots;
    // to count how many black dots
    for (var i = 0; i < arrayLength; i++) {
      if (bits[i] == true) {
        headbinary = headbinary.concat("1");
        blackdots++;
        console.log(blackdots);
      } else {
        headbinary = headbinary.concat("0");
      }
    }
    document.getElementById("myHead").innerHTML = myhead;
    document.getElementById("myHeadHex").innerHTML = myheadhex;
    document.getElementById("myHeadBits").innerHTML = myheadbits;
    document.getElementById("myHeadBinary").innerHTML = headbinary;
}
