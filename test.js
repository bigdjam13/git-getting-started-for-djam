    <p class="prix">Prix : <span id="prix'.$resultat['prod_id'].'">'.$resultat['prod_prix'].'</span> F</p>
</div>
<div class="checkbox">
        <input name="choix[]" type="checkbox" value="1" /> S&eacute;lectionner<br />
        Quantit&eacute;<input name="nombre'.$resultat['prod_id'].'" type="text" value="1" size="2" onchange="javascript:somme($resultat['prod_id'])"/>
        <div class="total">Total : <span id="total'.$resultat['prod_id'].'">25000</span> F</div>
        <input name="commande" type="submit" value="Commander" 
