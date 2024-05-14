class productService {
  constructor(model) {
    this.model = model;
  }
  async getAllProduct(req, res) {
    const product = await this.model.product.find({}, { _id: 0, __v: 0 });
    if (product.length === 0) {
      return { message: "not found", data: product };
    }
    return { message: "success", data: product };
  }

  async saveProduct(body) {
    const product = new this.model.product({ ...body });
    await product.save();
    return product;
  }

  async getMaxPrice(body) {
    const product = await this.model.product
      .find({}, { _id: 0, __v: 0 })
      .sort({ price: -1 })
      .limit(1);
    return product;
  }
  async getLimitProduct(req, res) {
    const { limit } = req.query;
    const product = await this.model.product
      .find({}, { _id: 0, __v: 0 })
      .limit(limit);
    if (product) {
      return { quantity: limit, data: product };
    } else {
      return { message: "not found", data: product };
    }
  }

  async putProduct(req, res, body) {
    const { id } = req.params;
    const productSave = new this.model.product({ ...body });
    const product = await this.model.product.findOneAndUpdate(
      { _id: id },
      { productSave }
    );
    if (product) {
      await saveProduct.save();
      return saveProduct;
    } else {
      return { message: "not found", id: `product with ${id}-not found` };
    }
  }
  async getPrice(req, res) {
    const piceResult = await this.model.product.find({
      price: { $gt: 300000 },
    });
    if (result) {
      return { piceResult };
    } else {
      return { message: "not found" };
    }
  }

  async patchProduct(req, res, body) {
    const { id } = req.params;
    const { title } = req.body;
    const productPatch = new this.model.product({ ...title });
    const result = await this.model.product.updateOne(
      { id: id },
      { title: productPatch }
    );
    if (result && result.acknowledged && result.modifiedCount > 0) {
      res.status(200).json(
        {
          message: `product with id-${id} smoothly updated`,
        },
        { product: result }
      );
    } else {
      res.status(500).json({ message: `product with ${id}-not found` });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    const product = await this.model.product.deleteOne({ _id: id });
    if (product) {
      return { message: "product with-`${id} deleted`" }, { product: product };
    } else {
      return { message: "product with-`${id} not found`" };
    }
  }
}

module.exports = productService;
