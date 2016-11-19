1.  $if(it.url)$[**$it.title$**]($it.url$)$endif$
    <span class="abstract-toggle">
    $if(it.abstract)$<span class="polarity">&plusmn;</span>$endif$
    </span>

    $if(it.coauthors)$$it.coauthors$.$endif$

    $if(it.date)$&zwnj;$it.date:year()$.$endif$
    $if(it.location)$$it.location$.$endif$

    $if(it.abstract)$<blockquote class="abstract">$it.abstract$</blockquote>$endif$

