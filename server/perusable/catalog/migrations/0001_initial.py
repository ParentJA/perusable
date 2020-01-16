# Generated by Django 3.0.1 on 2019-12-23 04:12

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Wine',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('country', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('points', models.IntegerField()),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('variety', models.CharField(max_length=255)),
                ('winery', models.CharField(max_length=255)),
            ],
        ),
    ]
