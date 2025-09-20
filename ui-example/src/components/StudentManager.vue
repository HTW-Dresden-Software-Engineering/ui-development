<template>
    <div class="my-8 space-y-4">
        <h2 class="text-2xl">Studenten Gruppe erstellen/bearbeiten</h2>
        <Card>
            <CardHeader>
                <CardTitle>Studenten Gruppe erstellen</CardTitle>
                <CardDescription>Erstellen Sie eine neue Studenten Gruppe</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="student-group-form" @submit="onSubmit" class="space-y-4">
                    <div>
                        <Label for="name">Name</Label>
                        <Input id="name" name="name" type="text" />
                    </div>
                    <div>
                        <Label for="description">Beschreibung</Label>
                        <Input id="description" name="description" type="text" />
                    </div>
                    <div>
                        <Label for="assignedStudents">Zugeordnete Studenten</Label>
                        <Input id="assignedStudents" name="assignedStudents" type="text" />
                    </div>
                    <Button type="submit">Speichern</Button>
                </form>
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { z } from "zod";

const studentGroupSchema = z.object({
    name: z.string().min(1, "Name ist erolderlich").max(50, "Name darf maximal 50 Zeichen haben"),
    description: z.string().max(50, "Beschreibung darf maximal 50 Zeichen haben").optional(),
    assignedStudents: z.array(z.string()).optional()
})

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(studentGroupSchema)
})

const onSubmit = handleSubmit((values) => {
    console.log(values);
})
</script>