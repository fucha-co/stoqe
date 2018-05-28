(function (doc) {
    var passwordInput = doc.getElementById("password-box"),
        timeDiv = doc.getElementById("password-time"),
        checksList = doc.getElementById("password-checks");
    var passwordplain;

    // Code to render the time returned by HSIMP
    var renderTime = function (time, input) {
        timeDiv.innerHTML = time || "";
    };

    // Code to output the checks returned by HSIMP
    var renderChecks = function (checks, input) {
        checksList.innerHTML = "";

        for (var i = 0, l = checks.length; i < l; i++) {
            var li = doc.createElement("li"),
                title = doc.createElement("h2"),
                message = doc.createElement("p");

            title.innerHTML = checks[i].name;
            li.appendChild(title);

            message.innerHTML = checks[i].message;
            li.appendChild(message);

            checksList.appendChild(li);
        }
    };

    // Setup the HSIMP object
    var attachTo = hsimp({
        options: {
            calculationsPerSecond: 10e9, // 10 billion calculations per second
            good: 31557600e9, // 1 billion years
            ok: 31557600e3 // 1 thousand years
        },
        outputTime: renderTime,
        outputChecks: renderChecks
    });

    // setup custom values for "instantly"/"forever"
    hsimp.setDictionary({
        "instantly": "no time at all",
        "forever": "Aaaaaaaaaaaaaaaages",
    });

    // Run the HSIMP
    attachTo(passwordInput);


}(this.document));


var passwordInput = document.getElementById("password-box")
var passwordplain = '';
var lastpasschecked = '';
var lastrequestfinished = true;
window.setInterval(function(){
  passwordplain = passwordInput.value;
  if ((lastpasschecked !== passwordplain) && lastrequestfinished) {

    if (passwordplain !== '') {

      var sha1pass = SHA1(passwordplain);
      sha1pass = sha1pass.toUpperCase();
      var subsha1pass = sha1pass.substring(5);
      lastrequestfinished = false;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          lastrequestfinished = true;
          var xhttpresponse = this.responseText;
          if (xhttpresponse.indexOf(subsha1pass) !== -1) {

            var passlist = xhttpresponse.split("\n");
            var pwnedcount = 0;
            var timespell = 'times';
            for (var i = 0; i < passlist.length; i++) {
              if (subsha1pass == passlist[i].split(":")[0]) {
                pwnedcount = passlist[i].split(":")[1];
                if (passlist[i].split(":")[1] == 1){ timespell = "time"; }
              }
            }

            document.getElementById("iscompromised").innerHTML = '<div class="mb0 brv0 notification is-danger is-size-5"><strong>BAD NEWS</strong><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>At least '+ pwnedcount + ' account logins</strong> using this password <strong>have been leaked online</strong><!--br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>Nb:</strong> There <strong>might be more</strong> than '+ pwnedcount + 'leaked accounts--><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; This password was leaked online <strong>with usernames + login addresses</strong><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; This password <strong>is known to work</strong> with specific email addresses<br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>Full access to accounts</strong> using this password have been leaked online<!--br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; Are you using <strong>the same password for different accounts?</strong> <br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; If so, <strong>how many accounts does this password login to?</strong><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>If any</strong> of these '+ pwnedcount + ' leaked accounts are yours then <strong>all your accounts are vulnerable</strong--><br><span class="icon"><i class="fas fa-exclamation-triangle"></i></span>&nbsp; <strong>All accounts </strong>using this same password + email address <strong> are vulnerable</strong><!--br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; And <strong>how many of these leaked '+ pwnedcount + ' accounts could belong to you?</strong--><!--br><span class="icon"><i class="fas fa-question-circle"></i></span>&nbsp; <strong>Can this password login to</strong> your banking, email, website, social media, etc.?--></div><div class="brt0 notification is-warning is-size-5"><span class="icon"><i class="fas fa-exclamation-circle"></i></span>&nbsp; <strong>STATUS</strong>: This password is <strong>LEAKED and COMPROMISED</strong><!-- Want help? STOQE can save you.--><div>';
          }else {
            lastrequestfinished = true;
            document.getElementById("iscompromised").innerHTML = '<div class="brt0 notification is-success is-size-5"><strong>GOOD NEWS</strong><br><span class="icon"><i class="fas fa-shield-check"></i></span>&nbsp; This password has <strong>never <span class="is-italic">knowingly</span> leaked online</strong><br><span class="icon"><i class="fas fa-bell"></i></span>&nbsp; <strong>STOQE Leaks Alert</strong> will notify you if your account logins do get leaked online<div>';
          }
        }else {
          if (this.readyState == 4) {
            lastrequestfinished = true;
            document.getElementById("iscompromised").innerHTML = '<span style="color: #ff0000;">This password can\'t be verified right now...</span>';
          }
        }
      };

      xhttp.open('GET', 'https://api.pwnedpasswords.com/range/' + sha1pass.substring(0, 5));
      xhttp.send();
    }
    lastpasschecked = passwordplain;
  }

}, 2000);

function passwordmodified() {
  var modifiedpassword = passwordInput.value;
  if (modifiedpassword !== passwordplain) {
    document.getElementById("iscompromised").innerHTML = '<div class="brt0 notification is- is-size-5"><span class="icon"><i class="far fa-spinner fa-spin"></i></span> Checking your password against ~5 billion passwords leaked online...</div>';
  }
}


/**
*
*  Secure Hash Algorithm (SHA1)
*  http://www.webtoolkit.info/
*
**/
function SHA1 (msg) {
    function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };
    function lsb_hex(val) {
        var str="";
        var i;
        var vh;
        var vl;
        for( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };
    function cvt_hex(val) {
        var str="";
        var i;
        var v;
        for( i=7; i>=0; i-- ) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
    }
    switch( msg_len % 4 ) {
        case 0:
            i = 0x080000000;
        break;
        case 1:
            i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
        break;
        case 2:
            i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
        break;
        case 3:
            i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;
        break;
    }
    word_array.push( i );
    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
    word_array.push( msg_len>>>29 );
    word_array.push( (msg_len<<3)&0x0ffffffff );
    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for( i= 0; i<=19; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=20; i<=39; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=40; i<=59; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=60; i<=79; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase();
}
