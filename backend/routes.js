const express = require("express");
const router = express.Router();
const { connectToDB } = require("./db");
const Hat = require("./Model/schema");
const CustomisableHat = require("./Model/CustomisableHat");
const {ValidateCustom,ValidateHat}=require("./Model/joi_schema")

router.get("/", async (req, res) => {
  try {
    const hats = await Hat.find();
    res.json(hats);
  } catch (err) {
    res.send("error" + err);
  }
});
router.get("/customizable",async(req,res)=>{
  try{
    const customisableHat=await CustomisableHat.find();
    res.json(customisableHat);
  }
  catch{
    res.send("error"+err);
  }
})
router.patch("/customUpdate/:id",async(req,res)=>{
  try {
    const {error}=ValidateCustom(req.body)
    if(error){
      return res.status(400).json({ error: error.details[0].message });
    }
    const customHat = await CustomisableHat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!customHat) {
      return res.status(404).send("Hat not found");
    }
    res.json(customHat);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
})

router.delete("/customDelete/:id", async (req, res) => {
  try {
    const Customhat = await CustomisableHat.findByIdAndDelete(req.params.id);
    if (!Customhat) {
      return res.status(404).send("Custom hat not found");
    }
    res.send(" Custom Hat deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting Custom hat");
  }
})

router.post("/add_customizable_hat", async (req, res) => {
  const { design_name, description, imageUrl } = req.body;

  try {
    const {error}=ValidateCustom(req.body)
    if(error){
      return res.status(400).json({ error: error.details[0].message });
    }
      const customisableHat = new CustomisableHat({
          design_name,
          description,
          imageUrl,
      });
      const saved = await customisableHat.save();
      res.status(201).json(saved);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.patch('/like/:id', async (req, res) => {
  try {
    const hatId = req.params.id;
    const existingHat = await Hat.findById(hatId);

    if (!existingHat) {
      return res.status(404).json({ message: 'Hat not found' });
    }

    existingHat.isLiked = !existingHat.isLiked;
    await existingHat.save();

    res.json(existingHat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const hats = await Hat.findById(req.params.id);
    res.json(hats);
  } catch (err) {
    res.status(500).send("error" + err); 
  }
});


router.post("/create", async (req, res) => {
  const hat = new Hat({
    HatID: req.body.HatID,
    HatName: req.body.HatName,
    DesignerID: req.body.DesignerID,
    Color: req.body.Color,
    Material: req.body.Material,
  });
  try {
    const a1 = await hat.save();
    res.json(a1);
  } catch (err) {
    res.send("error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const hat = await Hat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hat) {
      return res.status(404).send("Hat not found");
    }
    res.json(hat);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const hat = await Hat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hat) {
      return res.status(404).send("Hat not found");
    }
    res.json(hat);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const hat = await Hat.findByIdAndDelete(req.params.id);
    if (!hat) {
      return res.status(404).send("Hat not found");
    }
    res.send("Hat deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting hat");
  }
});

connectToDB();

module.exports = router;
