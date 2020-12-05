<?php
declare(strict_types=1);

namespace hiqolor\Parsers;

use hiqolor\Scheme;

class KonsoleParser implements ParserInterface
{
    public function parse(string $text): Scheme
    {
        $scheme = new Scheme();
        $lines = explode(PHP_EOL, $text);
        $name = '';
        foreach ($lines as $line) {
            if (preg_match('/^\[(\S+)\]$/', $line, $ms)) {
                $name = $ms[1];
            }
            if (preg_match('/^Color=(\S+)$/', $line, $ms)) {
                $raw = $ms[1];
                if (strpos($raw, ',')) {
                    $cs = explode(',', $raw);
                    $color = ['r' => $cs[0], 'g' => $cs[1], 'b' => $cs[2]];
                } else {
                    $color = $raw;
                }
                $scheme->set($this->prepareKey($name), $color);
            }
            if (preg_match('/^Description=(.+)$/', $line, $ms)) {
                if ($name === 'General') {
                    $scheme->name = $ms[1];
                }
            }
        }

        return $scheme;
    }

    private array $keys = [
        'Color0Intense' => 'color8',
        'Color1Intense' => 'color9',
        'Color2Intense' => 'color10',
        'Color3Intense' => 'color11',
        'Color4Intense' => 'color12',
        'Color5Intense' => 'color13',
        'Color6Intense' => 'color14',
        'Color7Intense' => 'color15',
    ];

    public function prepareKey(string $name): string
    {
        return $this->keys[$name] ?? strtolower($name);
    }
}
