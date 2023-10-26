// src/pages/AdminPanel.tsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AdminPanel: React.FC = () => {
    const [text, setText] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file || !text) {
            alert("Wypełnij wszystkie pola!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("text", text);

        try {
            await axios.post("API_ENDPOINT_URL", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Zdjęcie i tekst zostały dodane!");
            setText("");
            setFile(null);
        } catch (error) {
            console.error(error);
            alert("Wystąpił błąd podczas dodawania zdjęcia i tekstu.");
        }
    };

    return (
        <div>
            <h1>Panel Admina</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="text">
                    <Form.Label>Text:</Form.Label>
                    <Form.Control type="text" value={text} onChange={handleTextChange} />
                </Form.Group>
                <Form.Group controlId="file">
                    <Form.Label>Zdjęcie:</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Dodaj
                </Button>
            </Form>
        </div>
    );
};

export default AdminPanel;
