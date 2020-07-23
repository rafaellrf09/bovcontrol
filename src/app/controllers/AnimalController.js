const Animal = require("../schemas/AnimalSchema");

class AnimalController {
  async index (req, res) {
    try {
      const animals = await Animal.find();
      res.json(animals);
    } catch (error) {
      console.log(error);
    }
  }

  async show (req, res) {
    try {
      const animal = await Animal.findById(req.params.id);
      res.json(animal);
    } catch (error) {
      console.log(error);
    }
  }

  async store (req, res) {
    try {
      const newAnimal = await Animal.create(req.body);
      return res.json(newAnimal);
    } catch (error) {
      console.log(error);
    }
  }

  async update (req, res) {
    try {
      const animalUpdate = await Animal.findByIdAndUpdate(req.params.id, req.query, {
        new: true
      });
      res.json(animalUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  async delete (req, res){
    try {
      await Animal.findByIdAndRemove(req.params.id);
            res.status(200).send("Animal deletado.");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AnimalController;