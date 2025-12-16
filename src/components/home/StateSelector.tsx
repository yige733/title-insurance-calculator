'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { states } from '@/data/states';

export function StateSelector() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const router = useRouter();

    return (
        <div className="w-full max-w-sm mx-auto">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between h-12 text-lg"
                    >
                        {value
                            ? states.find((state) => state.slug === value)?.name
                            : "Search for a state..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Search state..." />
                        <CommandList>
                            <CommandEmpty>No state found.</CommandEmpty>
                            <CommandGroup>
                                {states.map((state) => (
                                    <CommandItem
                                        key={state.slug}
                                        value={state.name}
                                        onSelect={(currentValue) => {
                                            const selectedState = states.find(s => s.name.toLowerCase() === currentValue.toLowerCase());
                                            if (selectedState) {
                                                setValue(selectedState.slug);
                                                setOpen(false);
                                                router.push(`/${selectedState.slug}`);
                                            }
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === state.slug ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {state.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
