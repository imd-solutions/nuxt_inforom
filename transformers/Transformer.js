/* ============
 * Transformer
 * ============
 *
 * The base transformer.
 *
 * Transformers are used to transform the fetched data
 * to a more suitable format.
 * For instance, when the fetched data contains snake_cased values,
 * they will be camelCased.
 */

export default class Transformer {
  static fetchCollection(items) {
    return items.map((item) => this.fetch(item));
  }
  static sendCollection(items) {
    return items.map((item) => this.send(item));
  }
}
