<?php
declare(strict_types=1);

namespace hiqolor\Parsers;

use hiqolor\Scheme;

interface ParserInterface
{
    public function parse(string $text): Scheme;
}
