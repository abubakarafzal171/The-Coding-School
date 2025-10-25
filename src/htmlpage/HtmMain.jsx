import React from "react";
import { Element } from "react-scroll";
const HtmMain = () => {
  return (
    <div className="lg:w-[calc(100vw-250px)] p-6 lg:ml-[250px] overflow-y-auto">
      {/* 1. Introduction */}
      <Element name="introduction">
        <h1 className="text-2xl font-semibold py-2">HTML Introduction</h1>
        <p className="text-gray-800 py-2">
          HTML (<strong>HyperText Markup Language</strong>) is the standard
          markup language for creating web pages. HTML organizes content into
          elements (tags). Each element either wraps content or provides
          instructions to the browser (images, links, headings, lists, forms,
          etc.). Modern web development pairs HTML (structure) with CSS
          (presentation) and JavaScript (behavior).
        </p>
        <p className="text-gray-700">
          Key ideas: semantic structure (use tags that convey meaning),
          accessibility (use alt text, labels), and separation of concerns (HTML
          for structure, CSS for style, JS for interactivity).
        </p>
      </Element>

      {/* 2. Simple HTML Document */}
      <Element name="document">
        <h1 className="text-2xl font-semibold py-2">Simple HTML Document</h1>
        <p className="text-gray-800 py-2">
          A proper HTML page follows a basic skeleton. This skeleton ensures the
          browser can parse and render the page correctly and that metadata
          (title, charset, viewport) is available for SEO and mobile devices.
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Short page description for SEO" />
    <title>Page Title</title>
    <!-- Link CSS, fonts, and favicons here -->
  </head>
  <body>
    <header> ... </header>
    <main> ... </main>
    <footer> ... </footer>
  </body>
</html>`}
        </pre>
        <p className="text-gray-700">
          Notes:
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>&lt;!DOCTYPE html&gt;</strong> — tells browser to use
              HTML5 parsing.
            </li>
            <li>
              <strong>&lt;html lang="en"&gt;</strong> — improves accessibility
              and SEO.
            </li>
            <li>
              <strong>&lt;meta charset="utf-8"&gt;</strong> — ensures proper
              character encoding.
            </li>
          </ul>
        </p>
      </Element>

      {/* 3. Text Formatting Tags */}
      <Element name="formatting">
        <h1 className="text-2xl font-semibold py-2">Text Formatting Tags</h1>
        <p className="text-gray-800 py-2">
          Use semantic tags when choosing formatting:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <strong>&lt;h1&gt;–&lt;h6&gt;</strong> — headings; use them
            hierarchically (one &lt;h1&gt; per page ideally).
          </li>
          <li>
            <strong>&lt;p&gt;</strong> — paragraph text.
          </li>
          <li>
            <strong>&lt;strong&gt;</strong> and <strong>&lt;em&gt;</strong> —
            for importance and emphasis (better than purely visual &lt;b&gt; and
            &lt;i&gt;).
          </li>
          <li>
            <strong>&lt;small&gt;</strong> — fine print;{" "}
            <strong>&lt;mark&gt;</strong> — highlights.
          </li>
          <li>
            <strong>&lt;code&gt;</strong> and <strong>&lt;pre&gt;</strong> —
            inline code and preformatted blocks (preserve whitespace).
          </li>
          <li>
            <strong>&lt;blockquote&gt;</strong> — quoted blocks; use{" "}
            <strong>cite</strong> attribute or a &lt;footer&gt; for source.
          </li>
        </ul>

        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<h1>Title</h1>
<p>This is a <strong>strong</strong> word and this is <em>emphasized</em>.</p>
<pre><code>const x = 10;</code></pre>`}
        </pre>
      </Element>

      {/* 4. HTML Lists */}
      <Element name="lists">
        <h1 className="text-2xl font-semibold py-2">HTML Lists</h1>
        <p className="text-gray-800 py-2">
          Lists group items logically. Choose the list type that matches
          meaning:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <strong>&lt;ul&gt;</strong> — unordered list (bullets).
          </li>
          <li>
            <strong>&lt;ol&gt;</strong> — ordered list (numbers); good for
            steps.
          </li>
          <li>
            <strong>&lt;li&gt;</strong> — list item for both ul and ol.
          </li>
          <li>
            <strong>&lt;dl&gt; / &lt;dt&gt; / &lt;dd&gt;</strong> — description
            list (term / definition pairs).
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<ul>
  <li>Apple</li>
  <li>Orange</li>
</ul>

<ol>
  <li>Install</li>
  <li>Configure</li>
  <li>Run</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`}
        </pre>
      </Element>

      {/* 5. Some Other Tags */}
      <Element name="others">
        <h1 className="text-2xl font-semibold py-2">Some Other Tags</h1>
        <p className="text-gray-800 py-2">Useful miscellaneous tags:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            <strong>&lt;br&gt;</strong> — line break (use sparingly; prefer
            block elements).
          </li>
          <li>
            <strong>&lt;hr&gt;</strong> — thematic break / divider.
          </li>
          <li>
            <strong>&lt;span&gt;</strong> — inline generic container.
          </li>
          <li>
            <strong>&lt;div&gt;</strong> — block generic container.
          </li>
          <li>
            <strong>&lt;meta&gt;</strong> — metadata in &lt;head&gt; (charset,
            viewport, description).
          </li>
        </ul>
        <p className="text-gray-700">
          Use semantic elements where possible instead of generic
          &lt;div&gt;/&lt;span&gt;.
        </p>
      </Element>

      {/* 6. Image and Iframe */}
      <Element name="img">
        <h1 className="text-2xl font-semibold py-2">Image and Iframe</h1>
        <p className="text-gray-800 py-2">
          <strong>&lt;img&gt;</strong> embeds images. Always provide{" "}
          <code>alt</code> text for accessibility and SEO. Use width/height or
          modern responsive techniques (srcset/sizes) to improve performance.
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<img src="photo.jpg" alt="A person smiling" width="600" height="400" />

<!-- Responsive image example -->
<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="Description"
/>`}
        </pre>
        <p className="text-gray-800 py-2">
          <strong>&lt;iframe&gt;</strong> embeds other pages, maps, or videos.
          Use sandboxing and set appropriate width/height. Avoid iframes for
          critical content. For video, prefer native &lt;video&gt; or embed
          providers' recommended practices (lazy loading).
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<iframe src="https://example.com" title="Example site" width="800" height="450" loading="lazy"></iframe>`}
        </pre>
        <p className="text-gray-700">
          Security note: when embedding third-party content consider{" "}
          {"`sandbox`"} attribute or Content Security Policy (CSP) to restrict
          behavior.
        </p>
      </Element>

      {/* 7. HTML Links */}
      <Element name="links">
        <h1 className="text-2xl font-semibold py-2">HTML Links</h1>
        <p className="text-gray-800 py-2">
          The <strong>&lt;a&gt;</strong> (anchor) tag creates links. Use{" "}
          <code>rel</code>
          attributes for external links and <code>target="_blank"</code> to open
          new tabs.
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<!-- Internal link -->
<a href="/about">About</a>

<!-- Anchor to section on same page -->
<a href="#contact">Contact</a>

<!-- External link open in new tab, with security attributes -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>`}
        </pre>
        <p className="text-gray-700">
          SEO & accessibility:
          <ul className="pl-5 list-disc">
            <li>
              Use descriptive link text ("Read the privacy policy" instead of
              "click here").
            </li>
            <li>
              For external links that open in new tabs, inform users and use{" "}
              <code>rel="noopener noreferrer"</code>.
            </li>
          </ul>
        </p>
      </Element>

      {/* 8. HTML Tables */}
      <Element name="tables">
        <h1 className="text-2xl font-semibold py-2">HTML Tables</h1>
        <p className="text-gray-800 py-2">
          Tables present tabular data. Use semantic table tags and include
          headers and scopes for accessibility.
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>`}
        </pre>
        <p className="text-gray-700">
          Accessibility tips:
          <ul className="pl-5 list-disc">
            <li>
              Use <code>&lt;caption&gt;</code> to describe the table.
            </li>
            <li>
              Use <code>scope="col"</code> or <code>scope="row"</code> on
              headers.
            </li>
            <li>For complex tables, consider ARIA roles or summaries.</li>
          </ul>
        </p>
      </Element>

      {/* 9. HTML Media Tags */}
      <Element name="meta">
        <h1 className="text-2xl font-semibold py-2">
          HTML Media Tags (Audio & Video)
        </h1>
        <p className="text-gray-800 py-2">
          Native media elements allow embedding audio and video directly.
          Provide multiple sources and captions/subtitles for accessibility.
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<audio controls preload="metadata">
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<video width="640" height="360" controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <track src="captions.vtt" kind="captions" srclang="en" label="English" />
  Your browser does not support the video tag.
</video>`}
        </pre>
        <p className="text-gray-700">
          Best practices:
          <ul className="pl-5 list-disc">
            <li>
              Include captions (WebVTT) for videos for accessibility and SEO.
            </li>
            <li>
              Consider streaming/optimized formats; lazy-load media when
              possible.
            </li>
            <li>
              Respect autoplay rules: avoid autoplay with sound; many browsers
              block it.
            </li>
          </ul>
        </p>
      </Element>

      {/* 10. Form and Input Tags - DEEP DIVE */}
      <Element name="form">
        <h1 className="text-2xl font-semibold py-2">
          Form & Input Tags (Comprehensive)
        </h1>

        <h2 className="text-lg font-semibold mt-3">Overview</h2>
        <p className="text-gray-800 py-2">
          Forms collect user input (registration, login, search, checkout). A
          form is defined by the <code>&lt;form&gt;</code> tag and contains
          controls like inputs, selects, checkboxes, radios, textareas, and
          buttons. Security, accessibility, validation, and proper UX are
          crucial.
        </p>

        <h2 className="text-lg font-semibold mt-3">Basic Form Structure</h2>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<form action="/submit" method="POST">
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <button type="submit">Submit</button>
</form>`}
        </pre>

        <h2 className="text-lg font-semibold mt-3">Common Form Attributes</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>action</strong> — URL where form data is sent.
          </li>
          <li>
            <strong>method</strong> — "GET" (append to URL) or "POST" (payload
            in body).
          </li>
          <li>
            <strong>enctype</strong> — encoding type (e.g.,{" "}
            <code>multipart/form-data</code> for file uploads).
          </li>
          <li>
            <strong>autocomplete</strong> — "on" or "off" to control browser
            autofill.
          </li>
          <li>
            <strong>novalidate</strong> — disables built-in HTML validation (if
            you handle validation in JS/server).
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-3">
          Input Types (Complete list & uses)
        </h2>
        <p className="text-gray-800">
          The <code>&lt;input&gt;</code> tag has many <code>type</code> values.
          Use the most specific type for proper mobile keyboards, validation,
          and UX.
        </p>
        <ul className="pl-5 list-disc text-gray-700 space-y-1">
          <li>
            <strong>text</strong> — single-line text.
          </li>
          <li>
            <strong>password</strong> — obscured text (use autocomplete
            attribute wisely).
          </li>
          <li>
            <strong>email</strong> — expects an email; browsers validate format.
          </li>
          <li>
            <strong>tel</strong> — telephone; mobile devices show phone keypad.
          </li>
          <li>
            <strong>url</strong> — expects a URL.
          </li>
          <li>
            <strong>number</strong> — numeric input (min, max, step attributes).
          </li>
          <li>
            <strong>range</strong> — slider UI for numeric ranges.
          </li>
          <li>
            <strong>search</strong> — search field (semantic).
          </li>
          <li>
            <strong>color</strong> — color picker.
          </li>
          <li>
            <strong>date / time / datetime-local / month / week</strong> —
            date/time pickers (format depending on browser).
          </li>
          <li>
            <strong>checkbox</strong> — boolean option(s).
          </li>
          <li>
            <strong>radio</strong> — one-of-many choice.
          </li>
          <li>
            <strong>file</strong> — file uploads (use <code>accept</code> to
            restrict types).
          </li>
          <li>
            <strong>hidden</strong> — hidden data sent with form.
          </li>
          <li>
            <strong>submit / reset / button</strong> — form controls.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-3">Attributes for Inputs</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>name</strong> — required for form submission key.
          </li>
          <li>
            <strong>id</strong> — used to link label via <code>for</code>{" "}
            attribute.
          </li>
          <li>
            <strong>value</strong> — current value.
          </li>
          <li>
            <strong>placeholder</strong> — hint (not a replacement for label).
          </li>
          <li>
            <strong>required</strong> — forces input to be filled.
          </li>
          <li>
            <strong>min / max / step</strong> — numeric/date constraints.
          </li>
          <li>
            <strong>pattern</strong> — regex for client-side validation.
          </li>
          <li>
            <strong>readonly / disabled</strong> — read-only or disabled
            controls.
          </li>
          <li>
            <strong>autocomplete</strong> — hints for browser autofill (e.g.,{" "}
            <code>autocomplete="email"</code>).
          </li>
          <li>
            <strong>aria-* attributes</strong> — accessibility attributes for
            assistive tech.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-3">Labels & Accessibility</h2>
        <p className="text-gray-800">
          Always provide labels for inputs. Labels can be associated two ways:
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<!-- Using for/id -->
<label for="email">Email</label>
<input id="email" name="email" type="email" />

<!-- Wrapping the input -->
<label>
  Email
  <input name="email" type="email" />
</label>`}
        </pre>
        <p className="text-gray-700">
          Accessibility tips:
          <ul className="pl-5 list-disc">
            <li>
              Use <code>aria-describedby</code> for helper text and error
              messages.
            </li>
            <li>
              Use <code>role</code> when creating custom controls.
            </li>
            <li>
              Ensure tab order is logical; test with keyboard only and screen
              readers.
            </li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-3">Grouping & Semantics</h2>
        <p className="text-gray-800">
          Use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> to
          group related inputs (good for accessibility).
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<fieldset>
  <legend>Shipping Address</legend>
  <label>Street: <input name="street" /></label>
</fieldset>`}
        </pre>

        <h2 className="text-lg font-semibold mt-3">Example: Complex Form</h2>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<form action="/register" method="POST" enctype="multipart/form-data" autocomplete="on">
  <label for="name">Full name</label>
  <input id="name" name="name" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required autocomplete="email" />

  <fieldset>
    <legend>Preferences</legend>
    <label><input type="checkbox" name="newsletter" /> Subscribe</label>
    <label><input type="radio" name="plan" value="free" checked /> Free</label>
    <label><input type="radio" name="plan" value="pro" /> Pro</label>
  </fieldset>

  <label for="avatar">Avatar</label>
  <input id="avatar" name="avatar" type="file" accept="image/*" />

  <button type="submit">Register</button>
</form>`}
        </pre>

        <h2 className="text-lg font-semibold mt-3">
          Client-side Validation (HTML)
        </h2>
        <p className="text-gray-800">
          HTML5 provides built-in validation using attributes like{" "}
          <code>required</code>, <code>type="email"</code>, <code>pattern</code>
          , <code>min/max</code>. Browsers will show their own UI. For better
          UX, combine browser validation with custom JS validation to provide
          clearer messages and inline hints.
        </p>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<input type="email" required pattern=".+@.+\\..+" />
<!-- pattern uses JS-style regex without surrounding slashes -->`}
        </pre>

        <h2 className="text-lg font-semibold mt-3">
          Server-side Validation & Security
        </h2>
        <p className="text-gray-800">
          Never trust client-side validation only. Always validate and sanitize
          on the server:
        </p>
        <ul className="pl-5 list-disc text-gray-700">
          <li>Check types, ranges, and formats server-side.</li>
          <li>
            Protect against CSRF (use CSRF tokens) when accepting POST requests.
          </li>
          <li>Limit file upload size and validate file types.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-3">UX Best Practices</h2>
        <ul className="pl-5 list-disc text-gray-700">
          <li>
            Label first, then input; show clear inline validation messages.
          </li>
          <li>Use placeholders only as hints, not labels.</li>
          <li>
            Group related fields with fieldsets, and keep forms as short as
            possible.
          </li>
          <li>
            Use sensible defaults and remember user preferences where privacy
            allows.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-3">
          Accessibility Checklist for Forms
        </h2>
        <ul className="pl-5 list-disc text-gray-700">
          <li>
            Every control has a visible label or <code>aria-label</code> /{" "}
            <code>aria-labelledby</code>.
          </li>
          <li>
            Errors are announced to screen readers (use <code>aria-live</code>{" "}
            regions).
          </li>
          <li>Keyboard users can navigate all controls.</li>
          <li>Contrast and focus styles are visible.</li>
        </ul>
      </Element>

      {/* 11. HTML Semantic Tags */}
      <Element name="semantic">
        <h1 className="text-2xl font-semibold py-2">HTML Semantic Tags</h1>
        <p className="text-gray-800 py-2">
          Semantic tags describe the role of content and improve readability,
          maintainability, accessibility, and SEO. Use them instead of generic
          &lt;div&gt; when appropriate.
        </p>
        <ul className="pl-5 list-disc text-gray-700">
          <li>
            <strong>&lt;header&gt;</strong> — introductory content or nav for a
            page/section.
          </li>
          <li>
            <strong>&lt;nav&gt;</strong> — site navigation links.
          </li>
          <li>
            <strong>&lt;main&gt;</strong> — primary page content (one per page).
          </li>
          <li>
            <strong>&lt;article&gt;</strong> — self-contained content (blog
            post, news item).
          </li>
          <li>
            <strong>&lt;section&gt;</strong> — thematic grouping of content.
          </li>
          <li>
            <strong>&lt;aside&gt;</strong> — tangential content (sidebars, pull
            quotes).
          </li>
          <li>
            <strong>&lt;footer&gt;</strong> — footer content for page/section.
          </li>
        </ul>
      </Element>

      {/* 12. HTML and SEO */}
      <Element name="seo">
        <h1 className="text-2xl font-semibold py-2">HTML and SEO</h1>
        <p className="text-gray-800 py-2">
          HTML structure directly impacts how search engines interpret your
          page. Good practices:
        </p>
        <ul className="pl-5 list-disc text-gray-700">
          <li>
            Use meaningful <code>&lt;title&gt;</code> and{" "}
            <code>&lt;meta name="description"&gt;</code>.
          </li>
          <li>
            Use semantic headings (<code>&lt;h1&gt;</code> to{" "}
            <code>&lt;h6&gt;</code>) in order and include target keywords
            naturally.
          </li>
          <li>
            Provide <code>alt</code> text for images; descriptive link text;
            clean URLs; mobile-friendly layout (viewport meta).
          </li>
          <li>
            Use structured data (JSON-LD) for rich results when applicable.
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          {`<head>
  <title>Learn HTML - Beginner to Pro</title>
  <meta name="description" content="Comprehensive guide to HTML, forms, and best practices." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script type="application/ld+json">
    {"{"}"@context":"https://schema.org","@type":"Course","name":"HTML Course"{"}"}
  </script>
</head>`}
        </pre>
      </Element>
    </div>
  );
};

export default HtmMain;
