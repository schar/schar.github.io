1.  $if(it.url)$[$endif$**$it.title$**$if(it.url)$]($it.url$)$endif$
    <a class="abstract-toggle">
    $if(it.abstract)$<span class="polarity">&plusmn;</span>$endif$
    </a>

    $if(it.coauthors)$$it.coauthors$.$endif$

    $if(it.date)$&zwnj;$it.date:year()$.$endif$
    $if(it.location)$$it.location$.$endif$

    $if(it.abstract)$<blockquote class="abstract">$it.abstract$</blockquote>$endif$

