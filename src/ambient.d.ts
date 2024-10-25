type ToDo = {
	toDo: string;
	completed: boolean;
	priority: priorities;
};

type priorities = 'high' | 'medium' | 'low' | 'none';
