# Generated by Django 3.2.19 on 2023-10-06 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exploreApp', '0004_auto_20231006_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='explore_place',
            name='image',
            field=models.FileField(default='"C:\\Users\\HP\\Pictures\\Saved Pictures\\flower.jpeg"', upload_to=''),
        ),
    ]