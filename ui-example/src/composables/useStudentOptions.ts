import { ref, readonly } from "vue";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
}

export const useStudentOptions = () => {
  const loading = ref(true);
  const data = ref<Student[]>([]);
  const error = ref<any>(null);

  const simulateApiCall = async () => {
    try {
      loading.value = true;
      error.value = null;
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock student data
      data.value = [
        { id: 1, firstName: "Jürgen", lastName: "Anke" },
        { id: 2, firstName: "Ruben", lastName: "Kraus" },
        { id: 3, firstName: "Progra", lastName: "Mierer" },
      ];
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  simulateApiCall();

  return {
    loading: readonly(loading),
    data: readonly(data),
    error: readonly(error),
  };
};
