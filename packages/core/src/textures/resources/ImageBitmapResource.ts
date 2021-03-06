import { BaseImageResource } from './BaseImageResource';

/**
 * Resource type for ImageBitmap.
 * @class
 * @extends PIXI.BaseImageResource
 * @memberof PIXI
 * @param {ImageBitmap} source - Image element to use
 */
export class ImageBitmapResource extends BaseImageResource
{
    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {ImageBitmap} source - The source object
     * @return {boolean} `true` if source is an ImageBitmap
     */
    static test(source: unknown): source is ImageBitmap
    {
        return !!window.createImageBitmap && source instanceof ImageBitmap;
    }
}
