# Generated by Django 4.0.4 on 2022-06-07 19:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pet',
            old_name='historia',
            new_name='history',
        ),
        migrations.RenameField(
            model_name='pet',
            old_name='nome',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='pet',
            old_name='foto',
            new_name='photo',
        ),
    ]
