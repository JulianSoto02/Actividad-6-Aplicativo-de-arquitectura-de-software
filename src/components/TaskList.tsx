import React from 'react';
import { CheckCircle, Trash2 } from 'lucide-react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <li key={task.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
          <div className="flex items-center">
            <button
              onClick={() => onToggleTask(task.id)}
              className={`mr-3 ${task.completed ? 'text-green-500' : 'text-gray-400'}`}
            >
              <CheckCircle size={20} />
            </button>
            <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {task.title}
            </span>
          </div>
          <button onClick={() => onDeleteTask(task.id)} className="text-red-500 hover:text-red-700">
            <Trash2 size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;