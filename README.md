# 👀 Redacted

Quick and easy custom* censorship

\* custom config coming soon.

## 🔧 Installation

Download the minified version of redacted [here](https://raw.githubusercontent.com/jack-chapman/redacted/master/lib/redacted.min.js)

Alternatively, you could clone this repo and run `npm install`, then `npm build` to make your own copy.

## ✍️ How to use Redacted

First, drop the minified version of Redacted right at the bottom of the `<body>` in your HTML file:

```html
<body>
  ...
  <script src="redacted.min.js" type="text/javascript"></script>
</body>
```

Then, make an instance of Redacted and pass in a selector string for the elements you want to censor.

Redacted uses `document.querySelectorAll` under the hood, so anything you can select with that, Redacted will be able to find.

Once that's done, call the `censor` method on your Redacted instance.

Here's an example:

```html
<body>
  <p>
    This sentence has a word that is <span class="censor-me">censored</span>
  <p>
  ...
  <script src="redacted.min.js" type="text/javascript"></script>
  <script>
    new Redacted('.censor-me').censor();
  </script>
</body>
```

## ❌ What you can't censor

You can basically just censor text, so don't bother trying to censor images or something because you'll just be disappointed...