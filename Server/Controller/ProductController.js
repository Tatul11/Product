class productController {
  async getAllProduct(req, res) {
    try {
      const product = await req.app.services.product.getAllProduct();
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async saveProduct(req, res) {
    const { body } = req;
    body.image = req?.file?.path;
    try {
      const saveProduct = await req.app.services.product.saveProduct(body);
      res.status(201).json(saveProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getMaxPrice(req, res) {
    try {
      const prodPrice = await req.app.services.product.getMaxPrice();
      res.status(200).json({ prodPrice });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getProduct(req, res) {
    try {
      const product = await req.app.services.product.getProduct();
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getLimitProduct(req, res) {
    try {
      const product = await req.app.services.product.getLimitProduct();
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async putProduct(req, res) {
    const { body } = req;
    try {
      const UpdateProduct = await req.app.services.product.putProduct(body);
      res.status(201).json(UpdateProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async patchProduct(req, res) {
    const { body } = req;
    try {
      const UpdateProduct = await req.app.services.product.patchProduct(body);
      res.status(201).json(UpdateProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getPrice(req, res) {
    const { body } = req;
    try {
      const prodPrice = await req.app.services.product.getPrice(body);
      res.status(200).json({ prodPrice });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteProduct(req, res) {
    try {
      const deleteProduct = await req.app.services.product.deleteProduct();
      res.status(200).json({ data: deleteProduct });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = productController;
