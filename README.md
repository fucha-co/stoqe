sayso.co

# resources

##  features & improvments
Copyboard — A modern approach to copy text to clipboard — https://clipboardjs.com/
Atropos — a lightweight, free and open-source JavaScript library to create stunning touch-friendly 3D parallax hover effects https://atroposjs.com/
Dark Mode — https://larainfo.com/blogs/how-to-use-dark-mode-toggle-switch-in-tailwind-css-3

## design
https://tailwind-elements.com/

## dev
https://www.url-encode-decode.com/
https://www.zachleat.com/unicode-range-interchange/
https://codepen.io/KevinBatdorf/full/wvMNebe
https://codepen.io/ahinkle/pen/JjXyLKO
https://www.trysmudford.com/blog/encapsulated-11ty-components/
https://www.youtube.com/watch?v=MAtaT8BZEAo {tailwind css variables}

## perf
https://www.npmjs.com/package/eleventy-critical-css
https://stackoverflow.com/questions/18641479/use-a-google-font-and-include-only-a-z-and
https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF
https://dev.to/vamsitallam/few-tips-to-improve-webpage-performance-41e6

## fonts
https://www.omnibus-type.com/fonts/barriecito/
https://www.omnibus-type.com/wp-content/uploads/Barriecito_Specimen.pdf?1537878280
https://www.dyslexiefont.com/

## colour
https://coolors.co/
https://www.colorhexa.com/
https://www.hexcolortool.com/
https://tailwindcss-brand-colors.pages.dev/
https://github.com/ublabs/tailwindcss-brand-colors/blob/main/brands.json
https://dev.to/brandymedia/build-a-javascript-and-tailwind-css-theme-switcher-4hbc
https://dev.to/inhuofficial/our-new-colour-scheme-and-design-base-feedback-wanted-go7
https://lowfivebrewing.com/
https://www.canva.com/learn/website-color-schemes/
https://websitesetup.org/website-color-schemes/


## colour theme
https://github.com/crswll/tailwindcss-theme-swapper
https://tailwindcss-theme-swapper-crswll.vercel.app/
https://play.tailwindcss.com/Hg9AO7mqWa


## alpine click-to-copy w/ confirmation message
https://devdojo.com/tailwindcss/buttons
<script>
window.successTimeout = null;
//window.$store = null;
document.addEventListener('alpine:init', () => {
    Alpine.store('pageData', {
        'help': false,
        'success': false,
        fallbackCopyTextToClipboard:  function(text) {
            var textArea = document.createElement("textarea");
            textArea.value = text;

            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);
        },
        copyTextToClipboard: function(el) {
            let codeEl = document.getElementById('code-' + el.dataset.index);
            let text = codeEl.innerText.trim();
            if (!navigator.clipboard) {
                this.fallbackCopyTextToClipboard(text);
                return;
            }
            let that = this;
            navigator.clipboard.writeText(text).then(function() {
                that.success = true;
                clearTimeout(successTimeout);
                successTimeout = setTimeout(function(){
                    that.success = false;
                }, 2000);
                //console.log(that.success = true;);
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
            });
        }
    });
});
</script>

## link hover effect
https://codepen.io/argyleink/pen/poEjvpd

## to do's

https://www.zachleat.com/web/automatic-opengraph/#the-lazy-method
