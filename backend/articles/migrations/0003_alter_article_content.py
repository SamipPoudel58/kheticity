# Generated by Django 4.2.6 on 2023-10-09 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0002_alter_article_farmer_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="article",
            name="content",
            field=models.TextField(),
        ),
    ]