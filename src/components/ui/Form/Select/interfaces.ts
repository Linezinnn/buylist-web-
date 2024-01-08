export interface IOption{
	name: string;
    color?: string;
    id: string | number;
}

export interface IPropertiesOfOptionSelected{
    textColor: string,
    value: string,
	id: string | number,
}

export interface IActionOption{
    key: string,
    text: string,
    icon: React.ReactElement,
    action: (...args: any[]) => any,
}