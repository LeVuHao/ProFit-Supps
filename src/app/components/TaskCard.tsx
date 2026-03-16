import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Clock, MoreVertical, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export function TaskCard({ task, onToggleComplete, onDelete, onEdit }: TaskCardProps) {
  const priorityColors = {
    low: "bg-blue-500/10 text-blue-700",
    medium: "bg-yellow-500/10 text-yellow-700",
    high: "bg-red-500/10 text-red-700",
  };

  const statusColors = {
    "todo": "bg-gray-500/10 text-gray-700",
    "in-progress": "bg-purple-500/10 text-purple-700",
    "completed": "bg-green-500/10 text-green-700",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-start gap-3 flex-1">
          <Checkbox
            checked={task.status === "completed"}
            onCheckedChange={() => onToggleComplete(task.id)}
            className="mt-1"
          />
          <div className="flex-1">
            <CardTitle className={`text-lg ${task.status === "completed" ? "line-through opacity-60" : ""}`}>
              {task.title}
            </CardTitle>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(task)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(task.id)} className="text-red-600">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className={priorityColors[task.priority]}>
            {task.priority}
          </Badge>
          <Badge className={statusColors[task.status]}>
            {task.status.replace("-", " ")}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
            <Clock className="h-3 w-3" />
            <span>{task.dueDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
