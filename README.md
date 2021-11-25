# Bon Voyage

## Problème de droit d'écriture

En cas de problème avec les fichiers et dossiers créés par Docker avec les droits root, attribuer la propriété à ces fichiers à l'ensemble des fichiers et dossiers du projet.

Se placer à la racine puis :

```
sudo chown -R $USER:$USER .
```

## Problème de Hot Reloading avec Nodemon sur Windows 10

Adapter le script dev dans le fichier ./crud/api/package.json

```
"scripts":{
"dev":"nodemon -L ./bin/www"
}
```

---

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital, Management & Cognition (Masters Sciences Cognitives)
