

async function Java_cjdom_CJDom_printString(lib, str)
{
    // 'str' is an opaque Java object as used by the CheerpJ VM, convert it a usable object
    var strWrapper = lib.getObjectWrapper(str);

    // 'toString' is specially handled in wrapper objects to return a JS string
    console.log(await strWrapper.toString());
}

/**
 * CJDom method log().
 */
function Java_cjdom_CJDom_logImpl(lib, anObj)
{
    console.log(anObj);
}

/**
 * Int8Array method.
 */
function Java_cjdom_Int8Array_setImpl(lib, int8Array, index, aValue)
{
    int8Array[index] = aValue;
}

/**
 * Int8Array method.
 */
function Java_cjdom_Int8Array_newArrayForLengthImpl(lib, length)
{
    return new Int8Array(length);
}

/**
 * Uint16Array method.
 */
function Java_cjdom_Uint16Array_setImpl(lib, array, index, aValue)
{
    array[index] = aValue;
}

/**
 * Uint16Array method.
 */
function Java_cjdom_Uint16Array_newArrayForLengthImpl(lib, length)
{
    return new Uint16Array(length);
}

/**
 * Float32Array method.
 */
function Java_cjdom_Float32Array_setImpl(lib, array, index, dummy, aValue)
{
    array[index] = aValue;
}

/**
 * Float32Array method.
 */
function Java_cjdom_Float32Array_newArrayForLengthImpl(lib, length)
{
    return new Float32Array(length);
}

/**
 * CSSStyleDeclaration method: Returns the textual representation of the declaration block.
 */
function Java_cjdom_CSSStyleDeclaration_getCssTextImpl(lib, cssJS)  { return cssJS.cssText; }

/**
 * CSSStyleDeclaration method: Sets the textual representation of the declaration block.
 */
async function Java_cjdom_CSSStyleDeclaration_setCssTextImpl(lib, cssJS, cssStrJNI)
{
    var cssStrJS = await lib.getObjectWrapper(cssStrJNI).toString();
    cssJS.cssText = cssStrJS;
}

/**
 * Document method: Return document.body.
 */
function Java_cjdom_Document_getBodyImpl(lib, docObj)  { return docObj.body; }

/**
 * Document method: Create and return new element for given tag name.
 */
async function Java_cjdom_Document_createElementImpl(lib, docJS, tagName)
{
    var tagNameJS = await lib.getObjectWrapper(tagName).toString();
    return docJS.createElement(tagNameJS);
}

/**
 * HTMLElement method: Returns the htmlElement.style.
 */
function Java_cjdom_HTMLElement_getStyleImpl(lib, elementJS)  { return elementJS.style; }

/**
 * HTMLCanvasElement method: Return canvas width.
 */
function Java_cjdom_HTMLCanvasElement_getWidthImpl(lib, canvasJS)  { return canvasJS.width; }

/**
 * HTMLCanvasElement method: Set canvas height.
 */
function Java_cjdom_HTMLCanvasElement_setWidthImpl(lib, canvasJS, aValue)  { canvasJS.width = aValue; }

/**
 * HTMLCanvasElement method: Return canvas height.
 */
function Java_cjdom_HTMLCanvasElement_getHeightImpl(lib, canvasJS)  { return canvasJS.height; }

/**
 * HTMLCanvasElement method: Set canvas height.
 */
function Java_cjdom_HTMLCanvasElement_setHeightImpl(lib, canvasJS, aValue)  { canvasJS.height = aValue; }

/**
 * HTMLImageElement method: Return image source.
 */
function getSrcImpl(lib, imgJS)  { return imgJS.src; }

/**
 * HTMLImageElement method: Set image source.
 */
async function setSrcImpl(lib, imgJS, srcStrJNI)
{
    var srcStrJS = await lib.getObjectWrapper(srcStrJNI).toString();
    imgJS.src = srcStrJS;
}

/**
 * HTMLImageElement method: Return image width.
 */
function Java_cjdom_HTMLImageElement_getWidthImpl(lib, imgJS)  { return imgJS.width; }

/**
 * HTMLImageElement method: Set image height.
 */
function Java_cjdom_HTMLImageElement_setWidthImpl(lib, imgJS, aValue)  { imgJS.width = aValue; }

/**
 * HTMLImageElement method: Return image height.
 */
function Java_cjdom_HTMLImageElement_getHeightImpl(lib, imgJS)  { return imgJS.height; }

/**
 * HTMLImageElement method: Set image height.
 */
function Java_cjdom_HTMLImageElement_setHeightImpl(lib, imgJS, aValue)  { imgJS.height = aValue; }

/**
 * Window method.
 */
function Java_cjdom_Window_currentImpl(lib)  { return window; }

/**
 * Window method.
 */
function Java_cjdom_Window_getDocumentImpl(lib)  { return window.document; }

/**
 * Window method.
 */
async function Java_cjdom_Window_openImpl(lib, winJS, url, target, windowFeatures)
{
    var urlJS = await lib.getObjectWrapper(url).toString();
    var targetJS = await lib.getObjectWrapper(target).toString();
    var windowFeaturesJS = null; //await lib.getObjectWrapper(windowFeatures).toString();
    window.open(urlJS, targetJS, windowFeaturesJS);
}

var cjdomNativeMethods = {

    Java_cjdom_CJDom_logImpl,

    Java_cjdom_Int8Array_newArrayForLengthImpl, Java_cjdom_Int8Array_setImpl,

    Java_cjdom_Uint16Array_newArrayForLengthImpl, Java_cjdom_Uint16Array_setImpl,

    Java_cjdom_Float32Array_newArrayForLengthImpl, Java_cjdom_Float32Array_setImpl,

    Java_cjdom_CSSStyleDeclaration_getCssTextImpl,

    Java_cjdom_Document_getBodyImpl, Java_cjdom_Document_createElementImpl,

    Java_cjdom_HTMLElement_getStyleImpl, Java_cjdom_CSSStyleDeclaration_setCssTextImpl,

    Java_cjdom_HTMLCanvasElement_getWidthImpl, Java_cjdom_HTMLCanvasElement_setWidthImpl,
    Java_cjdom_HTMLCanvasElement_getHeightImpl, Java_cjdom_HTMLCanvasElement_setHeightImpl,

    Java_cjdom_HTMLImageElement_getWidthImpl, Java_cjdom_HTMLImageElement_setWidthImpl,
    Java_cjdom_HTMLImageElement_getHeightImpl, Java_cjdom_HTMLImageElement_setHeightImpl,

    Java_cjdom_Window_currentImpl, Java_cjdom_Window_getDocumentImpl,
    Java_cjdom_Window_openImpl,
};
