<template>
    <div class="my-8 space-y-4">
        <h2 class="text-2xl">Studenten Gruppe erstellen/bearbeiten</h2>
        <Card>
            <CardHeader>
                <CardTitle>Studenten Gruppe erstellen</CardTitle>
                <CardDescription>Erstellen Sie eine neue Studenten Gruppe</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="student-group-form" @submit="onSubmit"
                    class="space-y-4 gap-x-4 grid grid-cols-1 md:grid-cols-2">
                    <InputFormField name="name" label="Name" />
                    <InputFormField name="description" label="Beschreibung" />
                    <div class="col-span-1 md:col-span-2 space-y-2">
                        <Label for="assignedStudents">Zugeordnete Studenten</Label>
                        <div class="grid grid-cols-2 gap-x-4 max-w-md gap-y-2">
                            <div class="flex items-center justify-center gap-2" v-for="(student, index) in fields"
                                :key="student.key">
                                <SelectFormField v-model="student.value" :name="`assignedStudents[${index}]`"
                                    label="Zugeordnete Studenten" :options="studentOptions" />
                                <Button @click="remove(index)" variant="outline" size="icon" class="ml-2" type="button">
                                    <X />
                                </Button>
                            </div>

                        </div>
                        <Button variant="outline" size="icon" class="mt-2" type="button" @click="push('')">
                            <Plus />
                        </Button>
                    </div>
                    <Button type="submit">Speichern</Button>
                </form>
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useFieldArray, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { X, Plus } from "lucide-vue-next";
import InputFormField from "./InputFormField.vue";
import SelectFormField from "./SelectFormField.vue";

const studentGroupSchema = z.object({
    name: z.string().min(1, "Name ist erolderlich").max(50, "Name darf maximal 50 Zeichen haben"),
    description: z.string().max(50, "Beschreibung darf maximal 50 Zeichen haben").optional(),
    assignedStudents: z.array(z.string().min(1, "Bitte wählen Sie einen Studenten aus")).optional()
})

const studentOptions = [
    { label: "Max Mustermann", value: "1" },
    { label: "Erika Musterfrau", value: "2" },
    { label: "John Doe", value: "3" },
    { label: "Jane Doe", value: "4" },
];

const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(studentGroupSchema),
    initialValues: {
        name: "",
        description: "",
        assignedStudents: []
    }
})

const { fields, push, remove } = useFieldArray<string>("assignedStudents");

const onSubmit = handleSubmit((values) => {
    console.log(values);
})
</script>