import { TaskBoard } from '@/components/templates/task-board';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <TaskBoard className="w-[370px]" />
    </main>
  );
}
