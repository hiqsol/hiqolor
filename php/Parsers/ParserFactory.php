<?php
declare(strict_types=1);

namespace hiqolor\Parsers;

class ParserFactory
{
    public function get(string $type): ParserInterface
    {
        $class = __NAMESPACE__ . "\\{$type}Parser";
        return new $class();
    }
}
