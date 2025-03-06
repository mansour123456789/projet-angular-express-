const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
   
    name: String,
    role: { type: String, enum: ["admin", "developpeur"] },
    address: String,
    motDePasse: String, // Champ du mot de passe crypté
    image: String,
    tachesEffectuees: [{ type: mongoose.Schema.Types.ObjectId, ref: "tache" }],
});

// Avant de sauvegarder un utilisateur, crypter le mot de passe
userSchema.pre("save", async function (next) {
    if (!this.isModified("motDePasse")) return next(); // Ne crypte que si le mot de passe est modifié
    this.motDePasse = await bcrypt.hash(this.motDePasse, 10); // 10 = niveau de complexité
    next();
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
