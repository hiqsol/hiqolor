<?php
declare(strict_types=1);

namespace hiqolor\Parsers;

use hiqolor\Scheme;

class ColorTableParser implements ParserInterface
{
    public function parse(string $text): Scheme
    {
        $scheme = new Scheme();
        $lines = explode(PHP_EOL, $text);
        $name = '';
        foreach ($lines as $line) {
            if (preg_match('/^(\S+)\s+(\d+) \/ (\d+)\s+(\d+) \/ (\d+)\s+(\d+) \/ (\d+)/', $line, $ms)) {
                $key = $ms[1];
                $first = $this->getFirstColor($key);
                $second = $this->getSecondColor($key);
                $scheme->set($first, "hsl($ms[2], $ms[4]%, $ms[6]%)");
                $scheme->set($second, "hsl($ms[3], $ms[5]%, $ms[7]%)");
            }
            if (preg_match("/^Name: (.+)$/", $line, $ms)) {
                $scheme->name = $ms[1];
            }
        }

        return $scheme;
    }

    private array $firstColors = [
        'ground'    => 'foreground',
        'black'     => 'color0',
        'red'       => 'color1',
        'green'     => 'color2',
        'yellow'    => 'color3',
        'blue'      => 'color4',
        'purple'    => 'color5',
        'cyan'      => 'color6',
        'white'     => 'color7',
    ];

    private array $secondColors = [
        'ground'    => 'background',
        'black'     => 'color8',
        'red'       => 'color9',
        'green'     => 'color10',
        'yellow'    => 'color11',
        'blue'      => 'color12',
        'purple'    => 'color13',
        'cyan'      => 'color14',
        'white'     => 'color15',
    ];

    public function getFirstColor(string $key): string
    {
        $key = strtolower($key);
        return $this->firstColors[$key] ?? $key;
    }

    public function getSecondColor(string $key): string
    {
        $key = strtolower($key);
        return $this->secondColors[$key] ?? $key;
    }
}
