const Animal = require("../schemas/AnimalSchema");

class AnimalController {
  async index (req, res) {
    try {
      const animals = await Animal.find();
      const mapAnimals = animals.map(animal => {
        return {
          _id: animal._id,
          name: animal.name,
          type: animal.type,
          weight: animal.weight,
          monthAge: `${animal.age} meses`
        }
      })
      return res.json(mapAnimals);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async show (req, res) {
    try {
      const animal = await Animal.findById(req.params.id);
      
      if (!animal) return res.status(400).json({ erro: "Animal not found." })

      return res.json(animal);
    } catch (error) {
      console.log(error);
    }
  }

  async store (req, res) {
    try {
      const {name, type } = req.body;
      const animalExists = await Animal.findOne({name, type});
      if (animalExists) return res.status(400).json({ erro: "Animal already exists." })

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
      return res.json(animalUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  async delete (req, res){
    try {
      await Animal.findByIdAndRemove(req.params.id);
           return res.status(200).send("Animal deletado.");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AnimalController;