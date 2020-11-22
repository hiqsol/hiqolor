<?php
declare(strict_types=1);

namespace hiqolor\Parsers;

use hiqolor\Scheme;

class XresourceParser implements ParserInterface
{
    public function parse(string $text): Scheme
    {
        $scheme = new Scheme();
        $lines = explode(PHP_EOL, $text);
        foreach ($lines as $line) {
            if (preg_match('/^\*\.([a-zA-Z0-9]+):\s+(#\S{6})$/', $line, $ms)) {
                $scheme->set($ms[1], $ms[2]);
            }
        }

        return $scheme;
    }
}
