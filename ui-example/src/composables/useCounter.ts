import { ref, readonly } from "vue";

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  const increment = () => count.value++;
  const decrement = () => count.value--;
  return { count: readonly(count), increment, decrement };
}
