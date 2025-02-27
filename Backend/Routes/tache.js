
const express = require("express");
const Task = require("../db/tache");

const router = express.Router();

// Ajouter une tâche
router.post("/tasks", async (req, res) => {
    try {
        const { name, description, user } = req.body;
        const newTask = new Task({ name, description, user });
        await newTask.save();

        req.io.emit("taskCreated", newTask); // Notification en temps réel

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
});
// Récupérer toutes les tâches (GET)
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find(); // Récupère toutes les tâches
        res.status(200).json(tasks); // Répond avec la liste des tâches
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
});

// Modifier le statut d'une tâche
router.put("/tasks/:id", async (req, res) => {
    try {
        const { newStatus } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { statut: newStatus }, { new: true });

        if (!task) return res.status(404).json({ message: "Tâche non trouvée" });

        req.io.emit("taskStatusUpdated", { taskId: task._id, newStatus }); // Envoie une notif

        res.json({ message: "Statut mis à jour", task });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
});

module.exports = router;
