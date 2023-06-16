According to the docs, 91% of the records have at least one image. Need to handle 0 image cases as well as multiple image cases.

Each record contains an array 'images' that may or may not contain image objects. The image objects contain a key 'baseimageurl' which is described as the 'primary internet address for the image'. There is also a key 'iiifbaseuri' which provides the root address for accessing the image through their IIIF image delivery service.

The base URL for all presentation manifests begins with:

https://iiif.harvardartmuseums.org/manifests

You can request a manifest for any object by appending /object/OBJECT_ID to the base URL. For example the primary manifest for the object Self-Portrait Dedicated to Paul Gauguin is at:

https://iiif.harvardartmuseums.org/manifests/object/299843

# Color themes with daisyUI

Tailwind does not provide semantic color names, but DaisyUI does. 

*tailwind.config.js*
```jsx
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
```

*index.html*
```html
<html data-theme="cupcake"></html>
```
